import { TypeMaterialIconName } from '@/shared/types/icon.types'

export interface IMenuItems {
	icon: TypeMaterialIconName
	title: string
	link: string
}

export interface IMenu {
	title: string
	items: IMenuItems[]
}
