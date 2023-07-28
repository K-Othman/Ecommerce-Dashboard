"use client";
import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import { Children } from "react";

export default function SetupPage() {
  return (
    <div>
      <Modal title="test" description="Test Test" isOpen onClose={() => {}}>
        children
      </Modal>
    </div>
  );
}
