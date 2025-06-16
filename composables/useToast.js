const show = ref(false)
const message = ref('')
const color = ref('success')

export function useToast() {
  const toastSuccess = (msg) => {
    message.value = msg
    color.value = 'success'
    show.value = true
  }

  const toastError = (msg) => {
    message.value = msg
    color.value = 'error'
    show.value = true
  }

  return {
    show,
    message,
    color,
    toastSuccess,
    toastError,
  }
}
