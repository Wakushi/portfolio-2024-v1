declare module "*/shader-park-core/dist/shader-park-core.esm.js" {
	export function createSculptureWithGeometry(
		geometry: THREE.Geometry | THREE.BufferGeometry,
		source: string,
		uniformCallback?: () => Record<string, any>,
		params?: Record<string, any>,
		generatedGLSL?: string
	): any
}
