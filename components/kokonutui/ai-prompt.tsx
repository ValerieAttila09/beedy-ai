"use client";

import { ArrowRight, Bot, Check, ChevronDown, Paperclip } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import Anthropic from "@/components/kokonutui/anthropic";
import AnthropicDark from "@/components/kokonutui/anthropic-dark";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { cn } from "@/lib/utils";
import { AI_MODELS, MODEL_ICONS } from "@/lib/constants/icons";

export default function AI_Prompt() {
  const [value, setValue] = useState("");
  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight: 72,
    maxHeight: 240,
  });
  const [selectedModel, setSelectedModel] = useState("Claude Sonnet 4.5");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setValue("");
      adjustHeight(true);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto block py-4">
      <div className="rounded-2xl bg-neutral-100/10 backdrop-blur-xs border border-border/20 p-1.5 pt-4 dark:bg-white/10">
        <div className="mx-2 mb-2.5 flex items-center gap-2">
          <div className="flex flex-1 items-center gap-2">
            <Anthropic className="h-3.5 w-3.5 text-black dark:hidden" />
            <AnthropicDark className="hidden h-3.5 w-3.5 dark:block" />
            <h3 className="text-black text-xs tracking-tighter dark:text-white/90">
              is free this weekend!
            </h3>
          </div>
          <p className="text-black text-xs tracking-tighter dark:text-white/90">
            Ship Now!
          </p>
        </div>
        <div className="relative">
          <div className="relative flex flex-col">
            <div className="rounded-xl border border-border">
              <div className="overflow-y-auto max-h-[400px]">
                <Textarea
                  className={cn(
                    "w-full resize-none rounded-xl rounded-b-none border-none bg-white/50 px-4 py-3 placeholder:text-black/70 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-white/5 dark:text-white dark:placeholder:text-white/70",
                    "min-h-[100px]"
                  )}
                  id="ai-input-15"
                  onChange={(e) => {
                    setValue(e.target.value);
                    adjustHeight();
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder={"What can I do for you?"}
                  ref={textareaRef}
                  value={value}
                />
              </div>
              <div className="flex h-14 items-center rounded-b-xl bg-white/50 dark:bg-white/5">
                <div className="absolute right-3 bottom-3 left-3 flex w-[calc(100%-24px)] items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          className="flex h-8 items-center gap-1 rounded-md pr-2 pl-1 text-xs hover:bg-black/10 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 dark:text-white dark:hover:bg-white/10"
                          variant="ghost"
                        >
                          <AnimatePresence mode="wait">
                            <motion.div
                              animate={{ opacity: 1, y: 0, }}
                              className="flex items-center gap-1"
                              exit={{ opacity: 0, y: 5, }}
                              initial={{ opacity: 0, y: -5, }}
                              key={selectedModel}
                              transition={{ duration: 0.15, }}
                            >
                              {MODEL_ICONS[selectedModel]}
                              {selectedModel}
                              <ChevronDown className="h-3 w-3 opacity-50" />
                            </motion.div>
                          </AnimatePresence>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        className={cn(
                          "min-w-40",
                          "border-black/10 dark:border-white/10",
                          "bg-linear-to-b from-white via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800"
                        )}
                      >
                        {AI_MODELS.map((model) => (
                          <DropdownMenuItem
                            className="flex items-center justify-between gap-2"
                            key={model}
                            onSelect={() => setSelectedModel(model)}
                          >
                            <div className="flex items-center gap-2">
                              {MODEL_ICONS[model] || (
                                <Bot className="h-4 w-4 opacity-50" />
                              )}{" "}
                              {/* Use mapped SVG or fallback */}
                              <span>{model}</span>
                            </div>
                            {selectedModel === model && (
                              <Check className="h-4 w-4 text-blue-500" />
                            )}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="mx-0.5 h-4 w-px bg-black/10 dark:bg-white/10" />
                    <label
                      aria-label="Attach file"
                      className={cn(
                        "cursor-pointer rounded-md bg-white border border-border p-2 dark:bg-white/5",
                        "hover:bg-neutral-100/10 hover:shadow-sm focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 dark:hover:bg-white/10",
                        "text-neutral-900/40 hover:text-black dark:text-white/40 dark:hover:text-white"
                      )}
                    >
                      <input className="hidden" type="file" />
                      <Paperclip className="h-4 w-4 transition-colors" />
                    </label>
                  </div>
                  <button
                    aria-label="Send message"
                    className={cn(
                      "rounded-md bg-white border border-border p-2 dark:bg-white/5",
                      "hover:bg-neutral-100/10 focus-visible:ring-1 focus-visible:ring-blue-500 focus-visible:ring-offset-0 dark:hover:bg-white/10"
                    )}
                    disabled={!value.trim()}
                    type="button"
                  >
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 transition-opacity duration-200 dark:text-white",
                        value.trim() ? "opacity-100" : "opacity-30"
                      )}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
