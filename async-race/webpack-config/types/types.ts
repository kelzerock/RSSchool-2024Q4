export type mode = "prod" | "dev"

export type optionsWebpack = {
  path: {
    entry: string,
    build: string,
    template: string,
  },
  mode: mode,
  port: number
}