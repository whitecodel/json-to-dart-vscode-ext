class GeneratedModel {
  final String name;
  final String displayName;
  final String description;
  final String version;
  final Engines engines;
  final List<String> categories;
  final List<dynamic> activationEvents;
  final String main;
  final Contributes contributes;
  final Scripts scripts;
  final DevDependencies devDependencies;

  GeneratedModel({
    required this.name,
    required this.displayName,
    required this.description,
    required this.version,
    required this.engines,
    required this.categories,
    required this.activationEvents,
    required this.main,
    required this.contributes,
    required this.scripts,
    required this.devDependencies,
  });

  factory GeneratedModel.fromJson(Map<String, dynamic> json) {
    return GeneratedModel(
      name: json['name'],
      displayName: json['displayName'],
      description: json['description'],
      version: json['version'],
      engines: Engines.fromJson(json['engines']),
      categories: json['categories'],
      activationEvents: json['activationEvents'],
      main: json['main'],
      contributes: Contributes.fromJson(json['contributes']),
      scripts: Scripts.fromJson(json['scripts']),
      devDependencies: DevDependencies.fromJson(json['devDependencies']),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'displayName': displayName,
      'description': description,
      'version': version,
      'engines': engines.toJson(),
      'categories': categories,
      'activationEvents': activationEvents,
      'main': main,
      'contributes': contributes.toJson(),
      'scripts': scripts.toJson(),
      'devDependencies': devDependencies.toJson(),
    };
  }

  GeneratedModel copyWith({
    String? name,
    String? displayName,
    String? description,
    String? version,
    Engines? engines,
    List<String>? categories,
    List<dynamic>? activationEvents,
    String? main,
    Contributes? contributes,
    Scripts? scripts,
    DevDependencies? devDependencies,
  }) {
    return GeneratedModel(
      name: name ?? this.name,
      displayName: displayName ?? this.displayName,
      description: description ?? this.description,
      version: version ?? this.version,
      engines: engines ?? this.engines,
      categories: categories ?? this.categories,
      activationEvents: activationEvents ?? this.activationEvents,
      main: main ?? this.main,
      contributes: contributes ?? this.contributes,
      scripts: scripts ?? this.scripts,
      devDependencies: devDependencies ?? this.devDependencies,
    );
  }
}

class DevDependencies {
  final String typesVscode;
  final String typesMocha;
  final String typesNode;
  final String typescriptEslintEslintPlugin;
  final String typescriptEslintParser;
  final String eslint;
  final String typescript;
  final String vscodeTestCli;
  final String vscodeTestElectron;

  DevDependencies({
    required this.typesVscode,
    required this.typesMocha,
    required this.typesNode,
    required this.typescriptEslintEslintPlugin,
    required this.typescriptEslintParser,
    required this.eslint,
    required this.typescript,
    required this.vscodeTestCli,
    required this.vscodeTestElectron,
  });

  factory DevDependencies.fromJson(Map<String, dynamic> json) {
    return DevDependencies(
      typesVscode: json['@types/vscode'],
      typesMocha: json['@types/mocha'],
      typesNode: json['@types/node'],
      typescriptEslintEslintPlugin: json['@typescript-eslint/eslint-plugin'],
      typescriptEslintParser: json['@typescript-eslint/parser'],
      eslint: json['eslint'],
      typescript: json['typescript'],
      vscodeTestCli: json['@vscode/test-cli'],
      vscodeTestElectron: json['@vscode/test-electron'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      '@types/vscode': typesVscode,
      '@types/mocha': typesMocha,
      '@types/node': typesNode,
      '@typescript-eslint/eslint-plugin': typescriptEslintEslintPlugin,
      '@typescript-eslint/parser': typescriptEslintParser,
      'eslint': eslint,
      'typescript': typescript,
      '@vscode/test-cli': vscodeTestCli,
      '@vscode/test-electron': vscodeTestElectron,
    };
  }

  DevDependencies copyWith({
    String? typesVscode,
    String? typesMocha,
    String? typesNode,
    String? typescriptEslintEslintPlugin,
    String? typescriptEslintParser,
    String? eslint,
    String? typescript,
    String? vscodeTestCli,
    String? vscodeTestElectron,
  }) {
    return DevDependencies(
      typesVscode: typesVscode ?? this.typesVscode,
      typesMocha: typesMocha ?? this.typesMocha,
      typesNode: typesNode ?? this.typesNode,
      typescriptEslintEslintPlugin:
          typescriptEslintEslintPlugin ?? this.typescriptEslintEslintPlugin,
      typescriptEslintParser:
          typescriptEslintParser ?? this.typescriptEslintParser,
      eslint: eslint ?? this.eslint,
      typescript: typescript ?? this.typescript,
      vscodeTestCli: vscodeTestCli ?? this.vscodeTestCli,
      vscodeTestElectron: vscodeTestElectron ?? this.vscodeTestElectron,
    );
  }
}

class Scripts {
  final String vscodePrepublish;
  final String compile;
  final String watch;
  final String pretest;
  final String lint;
  final String test;

  Scripts({
    required this.vscodePrepublish,
    required this.compile,
    required this.watch,
    required this.pretest,
    required this.lint,
    required this.test,
  });

  factory Scripts.fromJson(Map<String, dynamic> json) {
    return Scripts(
      vscodePrepublish: json['vscode:prepublish'],
      compile: json['compile'],
      watch: json['watch'],
      pretest: json['pretest'],
      lint: json['lint'],
      test: json['test'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'vscode:prepublish': vscodePrepublish,
      'compile': compile,
      'watch': watch,
      'pretest': pretest,
      'lint': lint,
      'test': test,
    };
  }

  Scripts copyWith({
    String? vscodePrepublish,
    String? compile,
    String? watch,
    String? pretest,
    String? lint,
    String? test,
  }) {
    return Scripts(
      vscodePrepublish: vscodePrepublish ?? this.vscodePrepublish,
      compile: compile ?? this.compile,
      watch: watch ?? this.watch,
      pretest: pretest ?? this.pretest,
      lint: lint ?? this.lint,
      test: test ?? this.test,
    );
  }
}

class Contributes {
  final List<Commands> commands;

  Contributes({
    required this.commands,
  });

  factory Contributes.fromJson(Map<String, dynamic> json) {
    return Contributes(
      commands: json['commands'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'commands': commands,
    };
  }

  Contributes copyWith({
    List<Commands>? commands,
  }) {
    return Contributes(
      commands: commands ?? this.commands,
    );
  }
}

class Commands {
  final String command;
  final String title;

  Commands({
    required this.command,
    required this.title,
  });

  factory Commands.fromJson(Map<String, dynamic> json) {
    return Commands(
      command: json['command'],
      title: json['title'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'command': command,
      'title': title,
    };
  }

  Commands copyWith({
    String? command,
    String? title,
  }) {
    return Commands(
      command: command ?? this.command,
      title: title ?? this.title,
    );
  }
}

class Engines {
  final String vscode;

  Engines({
    required this.vscode,
  });

  factory Engines.fromJson(Map<String, dynamic> json) {
    return Engines(
      vscode: json['vscode'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'vscode': vscode,
    };
  }

  Engines copyWith({
    String? vscode,
  }) {
    return Engines(
      vscode: vscode ?? this.vscode,
    );
  }
}
