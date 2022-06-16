export const events = {
  global: {
    cancel: "back_to_menu",
    switchKeyboard: "switch_keyboard",
  },
  menu: {
    join: "join_call",
    create: "create_call",
    share: "local_sharing",
  },
  joinCall: {
    validate: "validate_join_typing",
    error: "validation_failed",
  },
  createCall: {
    validate: "validate_creation_typing",
    error: "validation_failed",
  },
  localSharing: {
    start: "start_sharing",
    stop: "stop_sharing",
  },
  meeting: {
    mute: "mute_microphone",
    camera: "toggle_camera",
    wave: "raise_hand",
    leave: "leave_call",
    askingToShareScreen: "ask_to_share_screen",
    sharingScreen: "share_screen",
    stopSharing: "stop_sharing",
  }
}