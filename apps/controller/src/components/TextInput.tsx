import { useState } from "react"
import { ArrowForward } from "@mui/icons-material"
import { Box, IconButton, InputBase } from "@mui/material"
import { socketEvents } from "@jitsi-box-pro/model"
import { useSocketContext } from "@/services/socket"
import { CustomKeyboard } from "@/components"

type AllowedEvents =
  | `${typeof socketEvents.joinCall.validate}`
  | `${typeof socketEvents.createCall.validate}`

interface TextInputProps {
  eventName: AllowedEvents
  placeholder: string
}

const TextInput = ({
  eventName,
  placeholder,
}: TextInputProps): React.ReactElement => {
  const { socket } = useSocketContext()
  const [input, setInput] = useState<string>("")

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInput(event.target.value)
  }

  const handleSubmit = () => {
    if (socket !== null) {
      socket.emit(eventName, input)
    }
  }
  return (
    <>
      <Box
        component="form"
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gridTemplateRows: "1fr",
          alignItems: "center",
          width: 650,
        }}
      >
        <InputBase
          value={input}
          onChange={handleInputChange}
          placeholder={placeholder}
          sx={{
            gridColumn: "1 / 3",
            gridRow: "1 / 2",
            height: 40,
            paddingLeft: 3,
            paddingRight: 8,
            borderRadius: 20,
            backgroundColor: "primary_lighter.main",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "primary_light.main",
          }}
          multiline
        />
        <IconButton
          color="primary"
          sx={{
            gridColumn: "2 / 3",
            gridRow: "1 / 2",
            zIndex: 1,
            height: 55,
            width: 55,
            backgroundColor: "primary_light.main",
          }}
          onClick={handleSubmit}
        >
          <ArrowForward />
        </IconButton>
      </Box>
      <CustomKeyboard setValue={setInput} />
    </>
  )
}

export default TextInput
