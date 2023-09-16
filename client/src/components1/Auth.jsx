import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const registerSchema = z.object({
    username: z.string().nonempty('Field is required').min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().nonempty('Field is required').min(8, { message: 'Too short, password should be atleast 8 letters long' })
  })

export default function Auth() {
    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
          username: "",
          password: ""
        },
    })

    function onSubmit(data){
        console.log(data)
        console.log(JSON.stringify(data, null, 4));
    }
      
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Card className="w-[350px]">
        <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>register yourself first before logging in.</CardDescription>
        </CardHeader>
        <CardContent>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Username</FormLabel>
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
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="password" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Register</Button>
                </form>
            </Form>
        </CardContent>
        <CardFooter>Already registered? <Link to={'/auth/login'} className="ml-4 underline text-gray-400">Login</Link></CardFooter>
        </Card>
    </div>
  )
}
