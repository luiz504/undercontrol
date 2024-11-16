import { Toast, useToastEngine } from './toast'
import { randomUUID } from 'expo-crypto'

type ToastAction = 'error' | 'warning' | 'success' | 'info' | 'muted'

type ToastOptions = {
  title: string
  description?: string
  duration?: number | null
  placement?: 'top' | 'bottom'
  type?: ToastAction
}
export const useToast = () => {
  const toast = useToastEngine()

  const show = ({
    title,
    description,
    duration,
    placement = 'top',
    type = 'success',
  }: ToastOptions) => {
    const id = randomUUID()
    toast.show({
      id,
      duration,
      placement,
      render: (props) => {
        return (
          <Toast.Root key={props.id} action={type}>
            <Toast.ButtonClose onPress={() => toast.close(props.id)} />
            <Toast.Title>{title}</Toast.Title>
            {description && (
              <Toast.Description>{description}</Toast.Description>
            )}
          </Toast.Root>
        )
      },
    })
    return { id }
  }

  return {
    show,
    close: toast.close,
    closeAll: toast.closeAll,
    isActive: toast.isActive,
  }
}
