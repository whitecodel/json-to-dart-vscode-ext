class GeneratedModel {
  final String? name;
  final String? displayName;
  final String? description;
  final String? version;
  final String? publisher;
  final String? repository;
  final Engines? engines;
  final List<String?>? categories;
  final List<dynamic>? activationEvents;
  final List<ContributesTest?>? contributesTest;
  final String? main;
  final Contributes? contributes;
  final Scripts? scripts;
  final DevDependencies? devDependencies;

  GeneratedModel({
    this.name,
    this.displayName,
    this.description,
    this.version,
    this.publisher,
    this.repository,
    this.engines,
    this.categories,
    this.activationEvents,
    this.contributesTest,
    this.main,
    this.contributes,
    this.scripts,
    this.devDependencies,
  });

  factory GeneratedModel.fromJson(Map<String, dynamic> json) {
    return GeneratedModel(
      name: json['name'],
      displayName: json['displayName'],
      description: json['description'],
      version: json['version'],
      publisher: json['publisher'],
      repository: json['repository'],
      engines: Engines.fromJson(json['engines']),
      categories: json['categories'],
      activationEvents: List<dynamic>.from(json['activationEvents']),
      contributesTest: (json['contributesTest'] as List<dynamic>)
          .map((item) => ContributesTest.fromJson(item))
          .toList(),
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
      'publisher': publisher,
      'repository': repository,
      'engines': engines?.toJson(),
      'categories': categories?.map((item) => item).toList(),
      'activationEvents': activationEvents?.map((item) => item).toList(),
      'contributesTest':
          contributesTest?.map((item) => item?.toJson()).toList(),
      'main': main,
      'contributes': contributes?.toJson(),
      'scripts': scripts?.toJson(),
      'devDependencies': devDependencies?.toJson(),
    };
  }
}

class DevDependencies {
  final String? typesVscode;
  final String? typesMocha;
  final String? typesNode;
  final String? typescriptEslintEslintPlugin;
  final String? typescriptEslintParser;
  final String? eslint;
  final String? typescript;
  final String? vscodeTestCli;
  final String? vscodeTestElectron;

  DevDependencies({
    this.typesVscode,
    this.typesMocha,
    this.typesNode,
    this.typescriptEslintEslintPlugin,
    this.typescriptEslintParser,
    this.eslint,
    this.typescript,
    this.vscodeTestCli,
    this.vscodeTestElectron,
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
}

class Scripts {
  final String? vscodePrepublish;
  final String? compile;
  final String? watch;
  final String? pretest;
  final String? lint;
  final String? test;

  Scripts({
    this.vscodePrepublish,
    this.compile,
    this.watch,
    this.pretest,
    this.lint,
    this.test,
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
}

class Contributes {
  final List<Commands?>? commands;

  Contributes({
    this.commands,
  });

  factory Contributes.fromJson(Map<String, dynamic> json) {
    return Contributes(
      commands: (json['commands'] as List<dynamic>)
          .map((item) => Commands.fromJson(item))
          .toList(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'commands': commands?.map((item) => item?.toJson()).toList(),
    };
  }
}

class ContributesTest {
  final List<Commands?>? commands;

  ContributesTest({
    this.commands,
  });

  factory ContributesTest.fromJson(Map<String, dynamic> json) {
    return ContributesTest(
      commands: (json['commands'] as List<dynamic>)
          .map((item) => Commands.fromJson(item))
          .toList(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'commands': commands?.map((item) => item?.toJson()).toList(),
    };
  }
}

class Commands {
  final String? command;
  final String? title;

  Commands({
    this.command,
    this.title,
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
}

class Engines {
  final String? vscode;

  Engines({
    this.vscode,
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
}
