import * as z from "zod"

import { Field, useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import { Trash2 } from "lucide-react";
import axios from "axios"
import { toast } from "@/components/ui/use-toast"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  companyName: z.string(),
  address: z.string(),
  email: z.string(),
  logoPath: z.string(),
  internalSubDomain: z.string(),
  domain: z.string(),
  setupStatus: z.string(),
})
type FormSchema = z.infer<typeof formSchema>

export default function SettingsCustomersPage() {
  const [ logoPath, setLogoPath ] = useState('');
  
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      logoPath: logoPath
    }
  });

  const { mutate: postCustomerData , isLoading } = useMutation({
    mutationFn: async ({ username, companyName,address,email,logoPath,internalSubDomain,domain,setupStatus }: FormSchema) => {
      const response  = await axios.post("/customers", {
        username,companyName,address,email
        ,logoPath
        ,internalSubDomain,domain,setupStatus
      });
      console.log(response)
      return response.data
    },
  });


  function onSubmit( input: FormSchema ){
    console.log(input)
    postCustomerData({
      username: input.username,
      companyName: input.companyName,
      address: input.address,
      email: input.email,
      logoPath: input.logoPath,
      internalSubDomain: input.internalSubDomain,
      domain: input.domain,
      setupStatus: input.setupStatus
    },
    {
      onSuccess: ({response}) => {
        console.log(response);
        toast({
            variant: "success",
            title: "You have created a customer!",
          })
      },
      onError: ({response}) => {
        console.log(response);
        toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: response.data.message,
        })
      }
    }
    )
  }

  function uploadImage(e:  React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    const data = new FormData();
    data.set('image',files[0]);
    
    axios.post('/upload/customer',data, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(response => {
      const { data: filename } = response;
      console.log(response)
      setLogoPath(filename);
    })
  }

  form.watch();

  return (<>
    <div className="mb-4">
        <h3 className="text-lg font-medium">Customers</h3>
        <p className="text-sm text-muted-foreground">
          All customers will be displayed here.
        </p>
      </div>

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
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Prishav Technologies Pvt Ltd." {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
      <div className="flex w-auto gap-4 items-center l">
          <div>
            <Label htmlFor="image">Logo</Label>
            <Input id="image" name="image" type="file" onChange={uploadImage} />
          </div>

          { logoPath && <div className="relative w-32 h-32 overflow-hidden"> 
            <img className="rounded-2xl" src={`${import.meta.env.VITE_API_BASE_URL}/uploads/${logoPath}`} alt="logo" />
            <Trash2 onClick={() => setLogoPath('')} className="absolute bottom-0 right-0 m-2 bg-black p-1 rounded-full cursor-pointer" color="white" />
          </div>
          }
      </div>

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="201 Address Lane" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Buisness Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="internalSubDomain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Internal Sub Domain</FormLabel>
              <FormControl>
                <Input placeholder="domina.com/subdomain" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="domain"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Domain</FormLabel>
              <FormControl>
                <Input placeholder="domain.com" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="setupStatus"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Setup Status</FormLabel>
              <FormControl>
                <Input placeholder="" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 

        {/* <FormField
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="hidden" >Logo</FormLabel>
              <FormControl>
                <Input  placeholder="" {...field} value={logoPath} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />  */}

        

        <Button disabled={isLoading} type="submit">Submit</Button>
        </form>
      </Form>
  </>
  )
}
