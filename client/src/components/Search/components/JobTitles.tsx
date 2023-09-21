import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AlertCircle, Medal } from "lucide-react";
import {
    Card,
    CardContent
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
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

const JobTitleData = [
  { value: "manager", label: "Manager" },
  { value: "project-manager", label: "Project Manager" },
  { value: "teacher", label: "Teacher" },
  { value: "owner", label: "Owner" },
  { value: "student", label: "Student" },
  { value: "director", label: "Director" },
  { value: "software-engineer", label: "Software Engineer" },
  { value: "consultant", label: "Consultant" },
  { value: "account-manager", label: "Account Manager" },
  { value: "engineer", label: "Engineer" },
  { value: "professor", label: "Professor" },
  { value: "sales-manager", label: "Sales Manager" },
  { value: "sales", label: "Sales" },
  { value: "partner", label: "Partner" },
  { value: "associate", label: "Associate" },
  { value: "president", label: "President" },
  { value: "administrative-assistant", label: "Administrative Assistant" },
  { value: "supervisor", label: "Supervisor" },
  { value: "general-manager", label: "General Manager" },
  { value: "realtor", label: "Realtor" }
];

const JobTitles = () => {
  const [ isAny , setIsAny ] = useState(false);
  const [ isKnown , setIsKnown ] = useState(false);
  const [ isUnKnown , setIsUnKnown ] = useState(false);
  const [ isPastJob , setIsPastJob ] = useState(false);

  const handleRadioClick = (value: String) => {
    setIsAny(value === 'isAny');
    setIsKnown(value === "isKnown");
    setIsUnKnown(value === "isUnKnown");
  };

  return (
    <>
        <AccordionItem value="jobTitles">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <Medal size={18} />
              Job Titles
            </div>
          </AccordionTrigger>
          <AccordionContent>
          <RadioGroup defaultValue="">
            <Card>
              <CardContent className="p-3">
                  <div className="flex items-center space-x-2">
                      <RadioGroupItem value="isAny" id="isAny" onClick={() => handleRadioClick('isAny')} />
                      <Label
                      htmlFor="isAny"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Is Any of
                      </Label>
                  </div>
                  
                  { isAny && <>
                    <div className="pt-2">
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Search for a Job Title" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <ScrollArea className="h-32 w-auto">
                              { JobTitleData.map((data) => {
                                return (
                                  <SelectItem value={data.value}>{data.label}</SelectItem>
                                )
                              })}
                            </ScrollArea>
                          </SelectGroup>
                        </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2 py-2">
                    <Checkbox id="isNotAny" />
                      <label
                        htmlFor="isNotAny"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Is Not any of
                      </label>
                  </div>

                      <div className="flex flex-col">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="pastJob" onClick={() => setIsPastJob(prevState => !prevState)}/>
                            <label
                              htmlFor="pastJob"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Include past Job Titles
                            </label>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger><AlertCircle size={16} /></TooltipTrigger>
                                  <TooltipContent>
                                    <p>You can also view contacts who have this job title <br /> as a past experience and other job titles.</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                          </div>
                            { isPastJob && <div className="pt-2"> 
                                <Select>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Search for a Job Title" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectGroup>
                                      <ScrollArea className="h-32 w-auto">
                                          { JobTitleData.map((data) => {
                                            return (
                                              <SelectItem value={data.value}>{data.label}</SelectItem>
                                            )
                                          })}
                                      </ScrollArea>
                                    </SelectGroup>
                                  </SelectContent>
                                </Select>  
                            </div>  
                          }
                        </div>
                      </>
                    }
                
              </CardContent>
            </Card>

            
            <Card className="mt-3">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="isKnown" id="isKnown" onClick={() => handleRadioClick('isKnown')} />
                      <Label
                      htmlFor="isKnown"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Is Known
                      </Label>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-3">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="isUnKnown" id="isUnKnown" onClick={() => handleRadioClick('isUnKnown')} />
                    <Label
                    htmlFor="isUnKnown"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Is UnKnown
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

export default JobTitles;
