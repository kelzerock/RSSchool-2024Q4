export interface ModeEnv {
  mode: "development" | "production",
  port?: number,
}

interface Paths {
  public: string,
  bundler: string,
  entryTS: string,
}

export interface WebpackOptions {
  paths: Paths,
  env: ModeEnv,
}
