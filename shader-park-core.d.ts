declare module "shader-park-core" {
	export function createSculptureWithGeometry(
		geometry: THREE.Geometry | THREE.BufferGeometry,
		source: string,
		uniformCallback?: () => Record<string, any>,
		params?: Record<string, any>,
		generatedGLSL?: string
	): any
}
