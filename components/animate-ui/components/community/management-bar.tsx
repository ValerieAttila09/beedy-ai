'use client';

import * as React from 'react';
import {
  Ban, BoxIcon,
} from 'lucide-react';
import { motion } from 'motion/react';
import { BUTTON_MOTION_CONFIG, LABEL_VARIANTS, LABEL_TRANSITION, NAVBAR_MENU_DATA } from '@/lib/constants';
import { Icons } from '@/lib/constants/icons';

function ManagementBar() {
  return (
    <div className="@container/wrapper w-full flex justify-center">
      <div className="flex w-fit flex-col @xl/wrapper:flex-row items-center gap-y-2 rounded-full border border-border/40 bg-background/10 backdrop-blur-xs p-1.5 shadow-lg">
        <div className="mx-auto flex flex-col @lg/wrapper:flex-row shrink-0 items-center">
          <motion.div
            layout
            layoutRoot
            className='mx-auto flex flex-wrap space-x-2 sm:flex-nowrap'
          >
            <motion.button
              {...BUTTON_MOTION_CONFIG}
              className="flex h-auto items-center space-x-2 overflow-hidden whitespace-nowrap rounded-full bg-white shadow-sm dark:bg-neutral-600/80 px-2.5 py-2.5 text-white"
              aria-label={`Beedy AI`}
            >
              <Icons.beedyAI />
              <motion.span
                variants={LABEL_VARIANTS}
                transition={LABEL_TRANSITION}
                className="invisible text-sm font-semibold bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-blue-500"
              >
                Beedy AI
              </motion.span>
            </motion.button>
          </motion.div>
          <div className="mx-3 h-6 w-px bg-border rounded-full hidden @lg/wrapper:block" />
          <motion.div
            layout
            layoutRoot
            className="mx-auto flex flex-wrap space-x-2 sm:flex-nowrap"
          >
            {NAVBAR_MENU_DATA.map((data) => {
              const MenuIcon = data.icon;
              return (
                <motion.button
                  key={data.title}
                  {...BUTTON_MOTION_CONFIG}
                  className="flex h-auto items-center space-x-2 overflow-hidden whitespace-nowrap rounded-full bg-white shadow-sm dark:bg-neutral-600/80 px-2.5 py-2.5 text-neutral-600 dark:text-neutral-200"
                  aria-label={data.title}
                >
                  <MenuIcon size={20} className="shrink-0" />
                  <motion.span
                    variants={LABEL_VARIANTS}
                    transition={LABEL_TRANSITION}
                    className="invisible text-sm"
                  >
                    {data.title}
                  </motion.span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
        <div className="mx-3 hidden h-6 w-px bg-border @xl/wrapper:block rounded-full" />
        <motion.button
          whileTap={{ scale: 0.975 }}
          className="flex h-10 text-sm cursor-pointer items-center justify-center rounded-full bg-blue-500 dark:bg-blue-600/80 px-3 py-2 text-white transition-colors duration-300 dark:hover:bg-blue-800 hover:bg-blue-600 w-full @xl/wrapper:w-auto"
        >
          <span className="font-medium text-white">Sign Up</span>
        </motion.button>
      </div>
    </div>
  );
}

export { ManagementBar };
