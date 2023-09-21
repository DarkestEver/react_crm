import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { AlertCircle, MailCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const status = [
  {
    label: "Verified",
    tooltip: "Email Verified: Highly likely to reach the contact",
    badge: "success"
  },
  {
    label: "Guessed",
    tooltip: "Email Guessed: Emails more likely to bounce",
    badge: "orange"
  },
  {
    label: "User Managed",
    tooltip: "Email Updated: Email has been uploaded or updated by your team",
    badge: "default"
  },
  {
    label: "New Data Available",
    tooltip: "New Data Available: There are job change alerts which led to updates on the contact email.",
    badge: "blue"
  },
  {
    label: "N/A",
    tooltip: "Email Unavailable",
    badge: "secondary"
  },
]

export default function EmailStatus(){
   
    return (
      <>
        <AccordionItem value="emailStatus">
          <AccordionTrigger>
            <div className="flex gap-2 items-center">
              <MailCheck size={18} />
              Email Status
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col items-start space-x-2 gap-2">
                  <h4>Business Email Status</h4>
                  { status.map((data) => {
                    return (
                    <div className="flex gap-2 items-center">
                      <Checkbox id="keywords"/>
                      <label
                      htmlFor="keywords"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        <Badge variant={data.badge}>{data.label}</Badge>
                      </label>
                      <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AlertCircle size={16} /></TooltipTrigger>
                            <TooltipContent>
                              <p>
                                  {data.tooltip}
                              </p>
                            </TooltipContent>
                          </Tooltip>
                      </TooltipProvider>
                    </div>
                  )
                  })}
                </div>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Advanced</AccordionTrigger>
                  <AccordionContent>
                    <pre>Confidence level (%)</pre>
                    <h4>Confidence for guessed emails</h4>
                    <Button variant="outline"> &lt;70% </Button>
                    <Button variant="outline"> 70-80% </Button>
                    <Button variant="outline"> &gt;85% </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              </CardContent>
            </Card>
          
          </AccordionContent>
        </AccordionItem>
      </>
    );
};
    