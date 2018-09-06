import { CHANGE_INPUT_VALUE,CHANGE_LIST,ITEM_DEL} from './actionType'
export const getInputChange=(value)=>({type:CHANGE_INPUT_VALUE,value})
export const getChangeListAction=()=>({type:CHANGE_LIST})
export const getItemDelAction=(index)=>({type:ITEM_DEL,index})
