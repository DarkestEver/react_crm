import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { HelpCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const Location = () => {
    const [ isRegion , setIsRegion ] = useState(false);
  const [ isZipCode , setIsZipCode ] = useState(false);

  const handleRadioClick = (value: String) => {
    setIsRegion(value === 'region');
    setIsZipCode(value === 'zipCode')
  };
  return (
    <>
        <AccordionItem value="location">
          <AccordionTrigger>
          < div className="flex gap-2 items-center">
              <MapPin size={18} />
              Location
            </div>
          </AccordionTrigger>
          <AccordionContent>
          <RadioGroup defaultValue="">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col justify-center">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="region" id="region" onClick={() => handleRadioClick('region')} />
                          <Label 
                          htmlFor="region"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Select region
                          </Label>
                    </div>
                    { isRegion && <>
                     <div className="pt-2">
                        <Select>
                            <p>City / State / Country / ZIP</p>
                            <SelectTrigger>
                                <SelectValue placeholder="Enter Locations" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <ScrollArea className="h-32 w-auto">
                                <SelectItem value="manager">manager</SelectItem>
                                <SelectItem value="project-manager">project manager</SelectItem>
                                <SelectItem value="teacher">teacher</SelectItem>
                                </ScrollArea>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                     </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Exclude locations</AccordionTrigger>
                          <AccordionContent>
                            <p>City / State / Country to exclude:</p>
                            <Select>
                              <SelectTrigger className="w-auto">
                                <SelectValue placeholder="Enter locations to exclude..." />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="apple">Apple</SelectItem>
                                  <SelectItem value="banana">Banana</SelectItem>
                                  <SelectItem value="blueberry">Blueberry</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                    </>
                    }
            
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-2">
              <CardContent className="p-4">
                <div className="flex flex-col justify-center">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="zipCode" id="zipCode" onClick={() => handleRadioClick('zipCode')} />
                        <Label 
                          htmlFor="zipCode"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Select ZIP code radius
                          </Label>
                    </div>
                    { isZipCode && <>
                        <div className="pt-2">
                            <div className="pb-2">
                                <p>Address / City / ZIP</p>
                                <Input type="text" placeholder="e.g. 94105" />
                            </div>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select miles" defaultValue={50} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                    <ScrollArea className="h-32 w-auto">
                                    <SelectItem value="25">within 25 miles</SelectItem>
                                    <SelectItem value="50">within 50 miles</SelectItem>
                                    <SelectItem value="100">within 100 miles</SelectItem>
                                    <SelectItem value="200">within 200 miles</SelectItem>
                                    
                                    </ScrollArea>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            
                            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded mt-2">
                                <HelpCircle />                                    
                                <CardDescription>This filter only applies to net new people, but not existing contacts.</CardDescription>
                            </div>
                        </div>
                    </>
                  }
            
                </div>

              </CardContent>
            </Card>
          </RadioGroup>
          </AccordionContent>
        </AccordionItem>

    </>
  );
};

export default Location;
