export type ModeEnvironment = {
  mode: "development" | "production";
  port?: number;
};

type Paths = {
  public: string;
  bundler: string;
  entryTS: string;
};

export type WebpackOptions = {
  paths: Paths;
  env: ModeEnvironment;
};
