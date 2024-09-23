import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddCompanyForm } from "./AddCompanyForm";

export const AddCompanyModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#1065B3] p-6">Add Company</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] max-h-[700px]">
        <DialogHeader>
          <DialogTitle className="text-center">Add Company</DialogTitle>
        </DialogHeader>
        <AddCompanyForm />
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};
