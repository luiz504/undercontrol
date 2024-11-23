import { RootStackParamList } from '../routes/types'

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
