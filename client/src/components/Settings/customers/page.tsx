import * as z from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import axios from "axios"
import { toast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  image: z.any()
})
type FormSchema = z.infer<typeof formSchema>


export default function SettingsCustomersPage() {
  const [ addedPhotos, setAddedPhotos ] = useState();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const { mutate: upload , isLoading } = useMutation({
    mutationFn: async ({ username, image }: FormSchema) => {
      const response  = await axios.post("/customer/upload", {
        username,
        image
      });
      console.log(response)
      return response.data
    },
  });


  function onSubmit( input: FormSchema ){
    upload({
      username: input.username,
      image: input.image,
    },
    {
      onSuccess: ({token}) => {
        localStorage.setItem('token', token);
        toast({
            variant: "success",
            title: "You have successfully logged in!",
          })
        // setRedirect(true)
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

  function uploadImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.set('image',files[0]);
    console.log(data)
    axios.post('/customer/upload',data, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(response => {
      const { data: filename } = response;
      console.log(response)
      // setAddedPhotos(prev => {
      //   return [ ...prev, filename ];
      // });
    })
  }

  return (<>
    <div>
        <h3 className="text-lg font-medium">Users</h3>
        <p className="text-sm text-muted-foreground">
          All users will be displayed here.
        </p>
      </div>
      {/* <QueryClientProvider client={queryClient}> */}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} value={field.value ?? ''} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
{/*     <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Logo image</FormLabel>
              <FormControl>
                <Input type="file" placeholder="logo image" {...field} value={field.value ?? ''} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
          /> */}

        <Button disabled={isLoading} type="submit">Submit</Button>
        </form>
        </Form>

      <div className="grid w-full max-w-sm items-center gap-1.5" encType="multipart/form-data">
        <Label htmlFor="image">Logo</Label>
        <Input id="image" name="image" type="file" onChange={uploadImage}/>
      </div>
      {/* </QueryClientProvider> */}
  </>
  )
}
