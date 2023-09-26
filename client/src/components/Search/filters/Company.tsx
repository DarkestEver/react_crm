import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Card,
    CardContent,
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

import { Building } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const Company = () => {
  const [ isPastCompany , setIsPastCompany ] = useState(false);
  const [ isCompnanyIsAny , setIsCompnanyIsAny ] = useState(false);
  const [ isCompnanyKnown , setIsCompnanyKnown ] = useState(false);
  const [ isCompnanyUnknown , setIsCompnanyUnknown ] = useState(false);

  const handleRadioClick = (value: String) => {
    setIsCompnanyIsAny(value === 'compnayIsAny');
    setIsCompnanyKnown(value === "compnayIsKnown");
    setIsCompnanyUnknown(value === "compnayIsUnknown");
  };

  return (
    <>
        <AccordionItem value="company">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <Building size={18} />
              Company
            </div>
          </AccordionTrigger>
          <AccordionContent>
          <RadioGroup defaultValue="">
            <Card>
              <CardContent className="p-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="compnayIsAny" id="compnayIsAny" onClick={() => handleRadioClick('compnayIsAny')} />
                      <Label
                      htmlFor="compnayIsAny"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Is Any of
                      </Label>
                  </div>
                  
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Enter Companies" />
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
                <div className="flex items-center space-x-2 py-3">
                  <Checkbox id="compnayIsNotAny" />
                    <label
                      htmlFor="compnayIsNotAny"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Is Not any of
                    </label>
                </div>
                <div className="flex flex-col ">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pastCompany" onClick={() => setIsPastCompany(prevState => !prevState)}/>
                      <label
                        htmlFor="pastCompany"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Include past company
                      </label>
                    </div>
                    { isPastCompany && <div className="pt-2">
                        <Select >
                            <SelectTrigger >
                            <SelectValue placeholder="Enter past companies"/>
                            </SelectTrigger>
                            <SelectContent>
                            <SelectGroup>
                                <ScrollArea className="h-32 w-auto">
                                  <SelectItem value="manager">manager</SelectItem>
                                  <SelectItem value="manager">manager</SelectItem>
                                  <SelectItem value="manager">manager</SelectItem>
                                  <SelectItem value="manager">manager</SelectItem>
                                  <SelectItem value="manager">manager</SelectItem>
                                </ScrollArea>
                            </SelectGroup>
                            </SelectContent>
                        </Select>  
                     </div>
                    }
            
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compnayIsKnown" id="compnayIsKnown" onClick={() => handleRadioClick('compnayIsKnown')} />
                      <Label
                      htmlFor="compnayIsKnown"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Is known
                      </Label>
                  </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compnayIsUnknown" id="compnayIsUnknown" onClick={() => handleRadioClick('compnayIsUnknown')} />
                      <Label
                      htmlFor="compnayIsUnknown"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Is Unknown
                      </Label>
                  </div>
              </CardContent>
            </Card>

            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
    </>
  );
};

export default Company;
