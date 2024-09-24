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
import { EditCompanyForm } from "./EditCompanyForm";

export const EditCompanyModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Company</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] max-h-[700px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Edit Company Information
          </DialogTitle>
        </DialogHeader>
        <EditCompanyForm />
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};
