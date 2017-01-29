import {BaseClass} from "./BaseClass"
import {Context, DefaultContext, CurrentContext} from "./Context"

interface LayerOptions {
		context?: Context
		parent?: Layer|Context|null,
		x?: number,
		y?: number,
		width?: number,
		height?: number,
		backgroundColor?: string,
		opacity?: number
}

export class Layer extends BaseClass {

	private _id = -1
	private _properties: LayerOptions = {
		parent: null,
		x: 0,
		y: 0,
		width: 200,
		height: 200,
		backgroundColor: "rgba(255, 0, 0, 0.5)",
		opacity: 1
	}

	_element: HTMLElement

	constructor(options: LayerOptions={}) {
		super()
		Object.assign(this, options)

		this._id = this.context.addLayer(this)
		this.context.renderer.updateStructure()
	}

	_updateProperty(name: string, value: any) {
		super._updateProperty(name, value)
		this.context.renderer.updateStyle(this, name, value)
	}

	get id() {
		return this._id
	}

	get context(): Context {
		return this._properties.context || CurrentContext
	}

	get parent() {
		return this._properties.parent
	}

	set parent(value) {

		if (this.parent === value) {
			return
		}

		this.context.renderer.updateStructure()
		this._updateProperty("parent", value)
		this._properties.parent = value
	}

	get children(): Layer[] {
		return this.context.layers.filter((layer) => {
			return layer.parent === this
		})
	}

	get x() {
		return this._properties.x
	}

	set x(value) {
		this._updateProperty("x", value)
		this._properties.x = value
	}

	get y() {
		return this._properties.y
	}

	set y(value) {
		this._updateProperty("y", value)
		this._properties.y = value
	}

	get width() {
		return this._properties.width
	}

	set width(value) {
		this._updateProperty("width", value)
		this._properties.width = value
	}

	get height() {
		return this._properties.height
	}

	set height(value) {
		this._updateProperty("height", value)
		this._properties.height = value
	}

	get backgroundColor() {
		return this._properties.backgroundColor
	}

	set backgroundColor(value) {
		this._updateProperty("backgroundColor", value)
		this._properties.backgroundColor = value
	}

	animate(options={}) {

	}


}

