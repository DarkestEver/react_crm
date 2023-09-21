import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button"
import CompanyKeywords from "./CompanyKeywords";
import { Factory } from "lucide-react";
import { cn } from "@/lib/utils"
import { useState } from "react";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

const IndustryAndKeywords = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  return (
    <>
      <AccordionItem value="industryAndKeywords">
        <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <Factory size={18} />
              Industry And Keywords
            </div>
        </AccordionTrigger>
        <AccordionContent>
          <Card>
            <CardContent className="p-4">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-full justify-between"
                >
                  {value
                    ? frameworks.find((framework) => framework.value === value)?.label
                    : "Search Industries"}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." className="h-9" />
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        onSelect={(currentValue) => {
                          setValue(currentValue === value ? "" : currentValue)
                          setOpen(false)
                        }}
                      >
                        {framework.label}
                        <CheckIcon
                          className={cn(
                            "ml-auto h-4 w-4",
                            value === framework.value ? "opacity-100" : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>

            
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Advanced settings</AccordionTrigger>
                  <AccordionContent>
                    <Tabs defaultValue="account" className="w-[400px]">
                      <TabsList>
                        <TabsTrigger value="notAnyOf">Is not any of</TabsTrigger>
                        <TabsTrigger value="isKnown">Is known</TabsTrigger>
                        <TabsTrigger value="isUnknown">Is Unknown</TabsTrigger>
                      </TabsList>
                      <TabsContent value="notAnyOf">
                        <Select>
                          <SelectTrigger className="w-auto">
                            <SelectValue placeholder="Select industries to exclude" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="apple">Apple</SelectItem>
                              <SelectItem value="banana">Banana</SelectItem>
                              <SelectItem value="blueberry">Blueberry</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </TabsContent>
                    </Tabs>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

            </CardContent>
          </Card>

          <CompanyKeywords />
        
        </AccordionContent>
      </AccordionItem>
    </>
  );
};

export default IndustryAndKeywords;
