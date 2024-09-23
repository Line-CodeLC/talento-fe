import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";

interface UserHeaderTagProps {
  user: {
    firstName: string;
    lastName: string;
    profilePicture: string;
  };
  role?: string;
}

const UserHeaderTag: FC<UserHeaderTagProps> = ({ user, role }) => {
  return (
    <div className="flex flex-row items-center justify-between space-x-2">
      <Avatar className="w-12 h-12">
        <AvatarImage
          src={user.profilePicture == "" ? undefined : user.profilePicture}
          alt="profile"
        />
        <AvatarFallback className="">{`${user.firstName
          .at(0)
          ?.toUpperCase()}${user.lastName
          .at(0)
          ?.toUpperCase()}`}</AvatarFallback>
      </Avatar>
      <div className="hidden md:text-lg md:block">
        <div className="flex flex-col items-start text-md">
          <div className="text-sm ">{user.firstName}</div>
          <div className="text-xs text-slate-700">{role ? role : "Admin"}</div>
        </div>
      </div>
    </div>
  );
};

export default UserHeaderTag;
