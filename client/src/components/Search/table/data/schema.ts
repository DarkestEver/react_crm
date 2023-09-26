import { z } from 'zod';

export const peopleSchema = z.object({
  "First Name": z.string(),
  "Last Name": z.string(),
  "Title": z.string(),
  "Company": z.string(),
  "Company Name for Emails": z.string(),
  "Email": z.string(),
  "Email Status": z.string(),
  "Email Confidence": z.string().nullable(),  // Allow null for Email Confidence
  "Seniority": z.string(),
  "Departments": z.string(),
  "Contact Owner": z.string(),
  "First Phone": z.string(),
  "Work Direct Phone": z.string(),
  "Home Phone": z.string(),
  "Mobile Phone": z.string(),
  "Corporate Phone": z.string(),
  "Other Phone": z.string(),
  "Stage": z.string(),
  "Lists": z.string(),
  "Last Contacted": z.string(),
  "Account Owner": z.string(),
  "# Employees": z.number(),
  "Industry": z.string(),
  "Keywords": z.string(),
  "Person Linkedin Url": z.string(),
  "Website": z.string(),
  "Company Linkedin Url": z.string(),
  "Facebook Url": z.string(),
  "Twitter Url": z.string(),
  "City": z.string(),
  "State": z.string().nullable(),
  "Country": z.string(),
  "Company Address": z.string(),
  "Company City": z.string(),
  "Company State": z.string().nullable(),  // Allow null for Company State
  "Company Country": z.string(),
  "Company Phone": z.string(),
  "SEO Description": z.string(),
  "Technologies": z.string().optional(),  // Make Technologies optional
  "Annual Revenue": z.number().optional(),  // Make Annual Revenue optional
  "Total Funding": z.string().optional(),  // Make Total Funding optional
  "Latest Funding": z.string().optional(),  // Make Latest Funding optional
  "Latest Funding Amount": z.string().optional(),  // Make Latest Funding Amount optional
  "Last Raised At": z.string().optional(),  // Make Last Raised At optional
  "Email Sent": z.boolean().optional(),  // Make Email Sent optional
  "Email Open": z.boolean().optional(),  // Make Email Open optional
  "Email Bounced": z.boolean().optional(),  // Make Email Bounced optional
  "Replied": z.boolean().optional(),  // Make Replied optional
  "Demoed": z.string().optional(),  // Make Demoed optional
  "Number of Retail Locations": z.number().optional(),  // Make Number of Retail Locations optional
  "Apollo Contact Id": z.string().optional(),  // Make Apollo Contact Id optional
  "Apollo Account Id": z.string().optional(),  // Make Apollo Account Id optional
});

export type People = {
  "First Name": string;
  "Last Name": string;
  "Title": string;
  "Company": string;
  "Company Name for Emails": string;
  "Email": string;
  "Email Status": string;
  "Email Confidence"?: string | null;
  "Seniority": string;
  "Departments": string;
  "Contact Owner": string;
  "First Phone": string;
  "Work Direct Phone": string;
  "Home Phone": string;
  "Mobile Phone": string;
  "Corporate Phone": string;
  "Other Phone": string;
  "Stage": string;
  "Lists": string;
  "Last Contacted": string;
  "Account Owner": string;
  "# Employees": number;
  "Industry": string;
  "Keywords": string;
  "Person Linkedin Url": string;
  "Website": string;
  "Company Linkedin Url": string;
  "Facebook Url": string;
  "Twitter Url": string;
  "City": string;
  "State"?: string | null;
  "Country": string;
  "Company Address": string;
  "Company City": string;
  "Company State"?: string | null;
  "Company Country": string;
  "Company Phone": string;
  "SEO Description": string;
  "Technologies"?: string | null;
  "Annual Revenue"?: number | null;
  "Total Funding"?: string | null;
  "Latest Funding"?: string | null;
  "Latest Funding Amount"?: string | null;
  "Last Raised At"?: string | null;
  "Email Sent"?: boolean | null;
  "Email Open"?: boolean | null;
  "Email Bounced"?: boolean | null;
  "Replied"?: boolean | null;
  "Demoed"?: string | null;
  "Number of Retail Locations"?: number | null;
  "Apollo Contact Id"?: string | null;
  "Apollo Account Id"?: string | null;
};


