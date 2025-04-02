export type mode = "prod" | "dev"

export interface optionsWebpack {
  path: {
    entry: string,
    build: string,
    template: string,
  },
  mode: mode,
  port: number
}