import { TypeMaterialIconName } from '@/shared/types/icon.types'

export interface IMenuItem {
	icon: TypeMaterialIconName
	title: string
	link: string
}

export interface IMenu {
	title: string
	item: IMenuItem[]
}
