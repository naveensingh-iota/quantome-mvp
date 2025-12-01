import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

export const TeamSettings: React.FC = () => {
  const [emailInput, setEmailInput] = useState("");
  const [roleSelect, setRoleSelect] = useState("Most stay");
  const [invitedEmails, setInvitedEmails] = useState<string[]>([
    "a@a@a@a@acoun.com",
    "a@a@acom",
  ]);

  const [companyMembers] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Olivia Rhye",
      email: "olivia@untitledui.com",
      role: "Access",
      status: "Access",
    },
    {
      id: "2",
      name: "Phoenix Baker",
      email: "phoenix@untitledui.com",
      role: "Access",
      status: "Access",
    },
    {
      id: "3",
      name: "Candice Wu",
      email: "candice@untitledui.com",
      role: "Most only",
      status: "Disable",
    },
    {
      id: "4",
      name: "Candice Wu",
      email: "candice@untitledui.com",
      role: "Last role",
      status: "Disable",
    },
  ]);

  const [hiredTalents] = useState<TeamMember[]>([
    {
      id: "1",
      name: "Alex Doe",
      email: "alexdoe@untitledui.com",
      role: "Admin",
      status: "Delete",
    },
    {
      id: "2",
      name: "Peyton Marie",
      email: "peyton.marie@untitledui.com",
      role: "Admin",
      status: "Delete",
    },
  ]);

  const removeEmail = (email: string) => {
    setInvitedEmails(invitedEmails.filter((e) => e !== email));
  };

  return (
    <div className="max-w-4xl">
      {/* Company employees Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Company employees (1)
          </h2>
          <p className="text-sm text-gray-600">
            Full list of people that access to [Open its] Team account together with their email and roles.
          </p>
        </div>

        {/* Email Input Section */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <div className="flex gap-3 mb-3">
            <div className="flex-1">
              <Input
                placeholder="Email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <Select value={roleSelect} onValueChange={setRoleSelect}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Most stay">Most stay</SelectItem>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="Member">Member</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Send invite
            </Button>
          </div>

          {/* Invited Emails */}
          {invitedEmails.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {invitedEmails.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-md text-sm"
                >
                  <span className="text-gray-700">{email}</span>
                  <button
                    onClick={() => removeEmail(email)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Team Members List */}
        <div className="space-y-3">
          {companyMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between py-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {member.name}
                  </p>
                  <p className="text-sm text-gray-600">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700 w-20">{member.role}</span>
                <Button
                  variant={member.status === "Access" ? "outline" : "ghost"}
                  size="sm"
                  className={
                    member.status === "Access"
                      ? "text-gray-700"
                      : "text-red-600 hover:text-red-700"
                  }
                >
                  {member.status}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hired Talents Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            Hired Talents
          </h2>
          <p className="text-sm text-gray-600">
            Manage your projects team and change.
          </p>
        </div>

        {/* Team Members List */}
        <div className="space-y-3">
          {hiredTalents.map((member) => (
            <div
              key={member.id}
              className="flex items-center justify-between py-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {member.name}
                  </p>
                  <p className="text-sm text-gray-600">{member.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700 w-20">{member.role}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  {member.status}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-600 hover:bg-blue-700">Save</Button>
      </div>
    </div>
  );
};