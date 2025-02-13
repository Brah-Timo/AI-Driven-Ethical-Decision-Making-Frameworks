import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import "@hookform/resolvers/zod/dist/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card } from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  context: z.string().min(10, "Context must be at least 10 characters"),
  stakeholders: z.string().min(2, "Stakeholders must be at least 2 characters"),
  potentialImpacts: z
    .string()
    .min(10, "Potential impacts must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

interface DecisionInputFormProps {
  onSubmit?: (data: FormValues) => void;
  defaultValues?: Partial<FormValues>;
}

const DecisionInputForm = ({
  onSubmit = (data) => console.log(data),
  defaultValues = {
    title: "",
    context: "",
    stakeholders: "",
    potentialImpacts: "",
  },
}: DecisionInputFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <Card className="w-[600px] p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-6">Decision Input Form</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Decision Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter the title of your decision"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="context"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Context</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the context and background of this decision"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stakeholders"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Stakeholders</FormLabel>
                <FormControl>
                  <Input
                    placeholder="List the key stakeholders affected by this decision"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="potentialImpacts"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Potential Impacts</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the potential impacts and consequences"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Analyze Decision
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default DecisionInputForm;
