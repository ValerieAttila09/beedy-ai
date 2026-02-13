"use client";

import Link from 'next/link';
import { ManagementBar } from '../animate-ui/components/community/management-bar';
import { Menu } from 'lucide-react';
import {Button} from "@/components/ui/button";
import { useSidebarStore } from '@/lib/store/use-sidebar';
import Image from 'next/image';
import BeedyLogo from "../../assets/icons/logo-beedy-ai-new.png";

const Navbar = () => {
	const { isOpen, toggleSidebar } = useSidebarStore();
	return (
		<nav className="fixed z-50 top-0 inset-x-0 md:p-2">
			{/* Desktop / large: existing management bar */}
			<div className="hidden md:block">
				<ManagementBar />
			</div>

			{/* Mobile / tablet: simple header */}
			<div className="md:hidden bg-white border-b border-border">
				<div className="flex items-center justify-between px-4 py-[7.5px]">
					<div className="">
						<Link href="/" className="size-8 overflow-hidden">
							<Image src={BeedyLogo} alt='Beedy Logo' width={28} height={28} className='w-full h-full object-cover'/>
						</Link>
					</div>
					<div className="flex items-center justify-end gap-3">

						<Button variant={'outline'} size={'icon-lg'} aria-label="Open menu" onClick={() => toggleSidebar()} className="">
							<Menu className='size-5'/>
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;