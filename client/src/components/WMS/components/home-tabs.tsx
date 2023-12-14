import { Field, useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";
import { Trash2 } from "lucide-react";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

const formSchema = z.object({
    companyName: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    tagline: z.string(),
    address: z.string(),
    phoneNumber: z.string(),
    logoPath: z.string(),
  })
  type FormSchema = z.infer<typeof formSchema>
  
const HomeTabs = (props: Props) => {
    const [ logoPath, setLogoPath ] = useState('');
  
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      logoPath: logoPath
    }
  });

  const { mutate: postCustomerData , isLoading } = useMutation({
    mutationFn: async ({ tagline, companyName, address,phoneNumber, logoPath}: FormSchema) => {
      const response  = await axios.post("/", {
        tagline, companyName, address,phoneNumber, logoPath
      });
      console.log(response)
      return response.data
    },
  });


  function onSubmit( input: FormSchema ){
    console.log(input)
    postCustomerData({
      tagline: input.tagline,
      companyName: input.companyName,
      address: input.address,
      phoneNumber: input.phoneNumber,
      logoPath: input.logoPath
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
    
    axios.post('/upload/wms',data, {
      headers: {'Content-Type': 'multipart/form-data'}
    }).then(response => {
      const { data: filename } = response;
      console.log(response)
      setLogoPath(filename);
    })
  }

  form.watch();
  return (
    <>
        <Tabs defaultValue="home1" className="h-full space-y-6">
            <div className="space-between flex items-center">
              <TabsList>
                <TabsTrigger value="home1" className="relative" > Home 1 </TabsTrigger>
                <TabsTrigger value="home2" className="relative"> Home 2 </TabsTrigger>
                <TabsTrigger value="home3"> Home 3 </TabsTrigger>
                <TabsTrigger value="home4"> Home 4 </TabsTrigger>
              </TabsList>
              
              {/* <div className="ml-auto mr-4">
                <Button>
                  <PlusCircledIcon className="mr-2 h-4 w-4" />
                  Add item
                </Button>
              </div> */}
            </div>
           
            <TabsContent
              value="home1"
              className="h-full flex-col border-none p-0 data-[state=active]:flex"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    Home 1 Layout
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Please fill out the details for Home1 page.
                  </p>
                </div>
              </div>
              <Separator className="my-4" />

              <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-2/3 space-y-6"
                >
                <div className="grid grid-cols-2 gap-4">

                <div className="grid gap-6">
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

                <FormField
                control={form.control}
                name="tagline"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Tagline</FormLabel>
                    <FormControl>
                        <Input placeholder="Write your companies tagline here" {...field} />
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

            </div>

            <div>
                <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                            <Input placeholder="+91-XXXXXXXXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                            <Input placeholder="18 Buck Lane" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
            </div>

            </div>

                <Button disabled={isLoading} type="submit">Submit</Button>
                </form>
            </Form>
            </TabsContent>
        </Tabs>
    </>
  );
};

export default HomeTabs;
