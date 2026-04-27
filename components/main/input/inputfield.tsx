"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

export default function InputField({
  onSubmit,
}: {
  onSubmit: (data: any) => void
}) {
  
    const [payLoad, setPayLoad] = useState({
        name: "",
        gender: "",
        status: "",
        program: "",
        applyAs: "",
        profileLink: "",
        profileImage: null as File | null,
    })

    const Submit = (e: React.FormEvent) => {
      e.preventDefault()

      if (
        !payLoad.name ||
        !payLoad.gender ||
        !payLoad.status ||
        !payLoad.program ||
        !payLoad.applyAs ||
        !payLoad.profileLink ||
        !payLoad.profileImage
      ) {
        {toast.error("Please fill in all fields")}
        return
      }

      onSubmit(payLoad)
    }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white px-5 py-9 rounded-xl shadow-md space-y-6 text-left">
      
      <h1 className="text-3xl font-bold text-[#0A326D] py-2 rounded-md">
        User Information
      </h1>

      <div className="flex flex-col md:flex-row justify-between gap-5">
        {/* Name */}
        <div className="space-y-2 w-full">
            <h2 className="font-medium">Name</h2>
            <Input placeholder="Enter your name" 
            value={payLoad.name}
            maxLength={25}
            onChange={(e) => setPayLoad({...payLoad, name: e.target.value})}/>
        </div>

        {/* Gender */}
        <div className="space-y-2 w-full">
            <h2 className="font-medium">Gender</h2>
            <Select
            value={payLoad.gender}
            onValueChange={(value) => setPayLoad({...payLoad, gender: value})}
            >
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
            </SelectContent>
            </Select>
        </div>
      </div>

      {/* Status */}
      <div className="space-y-2">
        <h2 className="font-medium">Status</h2>
        <Select
        value={payLoad.status}
        onValueChange={(value) => setPayLoad({...payLoad, status: value})}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Not now, maybe us">Not now, maybe us</SelectItem>
            <SelectItem value="Why can't we be together">Why can't we be together</SelectItem>
            <SelectItem value="As long as you're happy">As long as you're happy</SelectItem>
            <SelectItem value="I really wanted it to be you">I really wanted it to be you</SelectItem>
            <SelectItem value="Still hoping">Still hoping</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Program */}
      <div className="space-y-2">
        <h2 className="font-medium">Program</h2>
        <Select
          value={payLoad.program}
          onValueChange={(value) => setPayLoad({...payLoad, program: value})}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your program" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bs dee makausad">BS DEE Makausad</SelectItem>
            <SelectItem value="mechanical engiyearning">Mechanical Engiyearning</SelectItem>
            <SelectItem value="hospitality & yearning management">Hospitality & Yearning Management</SelectItem>
            <SelectItem value="computer sayangs">Computer Sayangs</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Apply As */}
      <div className="space-y-2">
        <h2 className="font-medium">Apply as</h2>
        <Select
          value={payLoad.applyAs}
          onValueChange={(value) => setPayLoad({...payLoad, applyAs: value})}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your application type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="professor">Professor</SelectItem>
            <SelectItem value="faculty">Faculty</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Profile Link */}
      <div className="space-y-2">
        <h2 className="font-medium">Profile Link</h2>
        <Input placeholder="Enter your social media profile link" 
        value={payLoad.profileLink}
        maxLength={42}
        onChange={(e) => setPayLoad({...payLoad, profileLink: e.target.value})}/>
      </div>

      {/* Profile Image */}
      <div className="space-y-2">
        <h2 className="font-medium">Profile Image</h2>
          <Input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0]

            if (!file) return

            // extra safety check
            if (!file.type.startsWith("image/")) {
              alert("Please upload an image file only!")
              return
            }

            setPayLoad({
              ...payLoad,
              profileImage: file,
            })
          }}
        />
      </div>
      {/* Submit Button */}
      <Button
        type="button"
        className="w-full bg-[#0A326D] text-white p-5"
        onClick={Submit}
      >
        Submit
      </Button>
    </div>
  )
}