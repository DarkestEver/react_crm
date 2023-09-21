import * as z from "zod"

import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
      Card,
      CardContent,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import { Users } from "lucide-react"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"

const items = [
    {
      id: "1-10",
      label: "1-10",
    },
    {
      id: "11-20",
      label: "11-20",
    },
    {
      id: "21-50",
      label: "21-50",
    },
    {
      id: "51-100",
      label: "51-100",
    },
    {
      id: "101-200",
      label: "101-200",
    },
    {
      id: "201-500",
      label: "201-500",
    },
    {
      id: "501-1000",
      label: "501-1000",
    },
    {
      id: "1001-2000",
      label: "1001-2000",
    },
    {
      id: "2001-5000",
      label: "2001-5000",
    },
    {
      id: "5001-10000",
      label: "5001-10000",
    },
    {
      id: "10001+",
      label: "10001+",
    },
  ] as const;  

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

export function Employees() {
    const [ isPredefinedRange,setIsPredefinedRange ] = useState(false);
    const [ isCustomRange,setIsCustomRange ] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ["", ""],
    },
  })

  const { toast } = useToast();
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  const handleRadioClick = (value: String) => {
    setIsCustomRange(value === 'customRange');
    setIsPredefinedRange(value === 'predefinedRange')
  };

  return (
    <>
        <AccordionItem value="item-6">
            <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <Users size={18} />
               # Employees
            </div>
            </AccordionTrigger>
            <AccordionContent>
              
            <RadioGroup defaultValue="">
              <Card>
                <CardContent className="p-4">
                  <div className="flex flex-col justify-center">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="predefinedRange" id="predefinedRange" onClick={() => handleRadioClick('predefinedRange')} />
                            <Label 
                              htmlFor="predefinedRange"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Predefined Range
                              </Label>
                        </div>
                        { isPredefinedRange && <>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pt-2">
                                    <FormField 
                                    control={form.control}
                                    name="items"
                                    render={() => (
                                        <FormItem>
                                        
                                        {items.map((item) => (
                                            <FormField
                                            key={item.id}
                                            control={form.control}
                                            name="items"
                                            render={({ field }) => {
                                                return (
                                                <FormItem
                                                    key={item.id}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(item.id)}
                                                        onCheckedChange={(checked) => {
                                                        return checked
                                                            ? field.onChange([...field.value, item.id])
                                                            : field.onChange(
                                                                field.value?.filter(
                                                                (value) => value !== item.id
                                                                )
                                                            )
                                                        }}
                                                    />
                                                    </FormControl>
                                                    <FormLabel className="text-sm font-normal">
                                                    {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                                )
                                            }}
                                            />
                                        ))}
                                        <FormMessage />

                                        </FormItem>
                                    )}
                                    />
                                </form>
                                </Form>
                            </>
                        }
                        
                    </div>
                </CardContent>
                </Card>

                <Card className="mt-2">
                    <CardContent className="p-4">
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="customRange" id="customRange" onClick={() => handleRadioClick('customRange')} />
                                <Label 
                                  htmlFor="customRange"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Custom Range
                                  </Label>
                            </div>

                        { isCustomRange && <>
                            <div className="flex flex-row gap-4 pt-2">
                                <Input type="number" placeholder="min" />
                                <Input type="number" placeholder="max" />
                            </div>
                            </>
                        }
                        </div>
                    </CardContent>
                </Card>

                <Card className="mt-2">
                    <CardContent className="p-4">
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="unknowEmployees" id="unknowEmployees" onClick={() => handleRadioClick('unknowEmployees')} />
                                <Label 
                                  htmlFor="unknowEmployees"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    # of employees is unknown
                                </Label>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </RadioGroup>
        
           </AccordionContent>
         </AccordionItem>
    </>

  )
}


<RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>