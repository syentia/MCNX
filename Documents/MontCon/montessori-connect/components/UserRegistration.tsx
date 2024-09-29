import { useState } from 'react'
import { Button, Input, Radio, RadioGroup, Textarea } from "@nextui-org/react"

type UserType = 'parent' | 'educator' | 'school_admin' | 'training_center_admin'

interface UserRegistrationProps {
  onSubmit: (userData: any) => void
}

export function UserRegistration({ onSubmit }: UserRegistrationProps) {
  const [userType, setUserType] = useState<UserType>('parent')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    additionalInfo: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ ...formData, userType })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <RadioGroup
        label="I am a:"
        value={userType}
        onValueChange={(value) => setUserType(value as UserType)}
      >
        <Radio value="parent">Parent</Radio>
        <Radio value="educator">Educator</Radio>
        <Radio value="school_admin">School Administrator</Radio>
        <Radio value="training_center_admin">Training Center Administrator</Radio>
      </RadioGroup>

      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <Input
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />

      {userType === 'parent' && (
        <Textarea
          label="What are you looking for in a Montessori school?"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
        />
      )}
      {userType === 'educator' && (
        <Textarea
          label="Briefly describe your Montessori experience and qualifications"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
        />
      )}
      {userType === 'school_admin' && (
        <Textarea
          label="Tell us about your school and its Montessori program"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
        />
      )}
      {userType === 'training_center_admin' && (
        <Textarea
          label="Describe your training center and the programs you offer"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
        />
      )}

      <Button type="submit" color="primary">
        Register
      </Button>
    </form>
  )
}
