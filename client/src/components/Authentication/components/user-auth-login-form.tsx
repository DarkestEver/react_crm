import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Icons } from "./icons"
import { Input } from "@/components/ui/input"
import { Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import axios from "axios";
import { cn } from "@/lib/utils"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string()
})

type SinupForm = z.infer<typeof formSchema>

export function UserAuthLoginForm({ className, ...props }: UserAuthFormProps) {
    const { toast } = useToast()
    const [ redirect , setRedirect ] = useState(false);
  const { mutate: signUp , isLoading } = useMutation({
    mutationFn: async ({ username, password }: SinupForm) => {
      const response  = await axios.post("/user/auth/login", {
        username,
        password
      });
      return response.data
    },
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  function onSubmit( input: SinupForm ){
    signUp({
      username: input.username,
      password: input.password,
    },
    {
      onSuccess: ({token}) => {
        localStorage.setItem('token', token);
        toast({
            variant: "success",
            title: "You have successfully logged in!",
          })
        setRedirect(true)
      },
      onError: ({response}) => {
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: response.data.message,
        })
      }
    }
    )
  }

//   form.watch();

  if(redirect){
    return <Navigate to="/dashboard" />
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center justify-center">
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              <Button disabled={isLoading} type="submit">Login</Button>
          </div>
        </form>
      </Form>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
      
      </div>
      <Toaster />
    
    </div>
  )
}