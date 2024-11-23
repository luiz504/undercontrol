import { NavigatorScreenParams } from '@react-navigation/native'

export type CardsStackParamList = {
  List: undefined
  Create: undefined
  Details: { id: string }
  CreateCardTransaction: { id: string }
}
export type ProtectedTabParamList = {
  Summary: undefined
  Cards: NavigatorScreenParams<CardsStackParamList>
  Settings: undefined
}
export type RootStackParamList = {
  Welcome: undefined
  '(Protected)': NavigatorScreenParams<ProtectedTabParamList>
}
