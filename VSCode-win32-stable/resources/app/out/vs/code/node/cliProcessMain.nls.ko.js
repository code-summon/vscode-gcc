/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/cliProcessMain.nls.ko",{"vs/base/common/json":["잘못된 기호","Invalid number format","Property name expected","Value expected","Colon expected","Comma expected","Closing brace expected","Closing bracket expected","파일 끝 필요"],"vs/base/common/severity":["오류","경고","정보"],"vs/base/node/zip":["zip 파일 내에 {0}이(가) 없습니다."],"vs/code/node/cliProcessMain":["'{0}' 확장을 찾을 수 없습니다.","'{0}' 확장이 설치되어 있지 않습니다.","전체 확장 ID(예: {0})를 사용하세요.","'{0}' 확장이 이미 설치되어 있습니다.","마켓플레이스에서 '{0}'을(를) 찾았습니다.","설치 중...","확장 '{0}' v{1}이(가) 성공적으로 설치되었습니다!","{0} 제거 중...","'{0}' 확장이 성공적으로 제거되었습니다!"],"vs/platform/configuration/common/configurationRegistry":["구성 설정을 적용합니다.","설정을 요약합니다. 이 레이블은 설정 파일에서 구분 주석으로 사용됩니다.","구성 속성에 대한 설명입니다.","설정된 경우 'configuration.type'을 '개체'로 설정해야 합니다.","'configuration.title'은 문자열이어야 합니다.","'configuration.properties'는 개체여야 합니다."],"vs/platform/extensionManagement/common/extensionManagement":["Extensions"],"vs/platform/extensionManagement/node/extensionManagementService":["Extension invalid: package.json is not a JSON file.","Extension invalid: manifest name mismatch.","Extension invalid: manifest publisher mismatch.","Extension invalid: manifest version mismatch.","{0}을(를) 다시 설치하기 전에 Code를 다시 시작하세요.","이 버전의 코드에서 {0}의 호환 버전을 찾을 수 없습니다.","Could not find extension"],"vs/platform/extensions/common/extensionsRegistry":["가져온 확장 설명이 비어 있습니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `object` 형식이어야 합니다.","속성 `{0}`은(는) 필수이며 `string` 형식이어야 합니다.","속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.","속성 `{0}`은(는) 생략할 수 있으며 `string[]` 형식이어야 합니다.","속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.","속성 `{0}`은(는) 생략할 수 있으며 `string` 형식이어야 합니다.","확장의 폴더({1}) 내에 포함할 `main`({0})이 필요합니다. 이로 인해 확장이 이식 불가능한 상태가 될 수 있습니다.","속성 `{0}` 및 `{1}`은(는) 둘 다 지정하거나 둘 다 생략해야 합니다.","VS Code 갤러리에 사용되는 확장의 표시 이름입니다.","확장을 분류하기 위해 VS Code 갤러리에서 사용하는 범주입니다.","VS Code 마켓플레이스에 사용되는 배너입니다.","VS Code 마켓플레이스 페이지 머리글의 배너 색상입니다.","배너에 사용되는 글꼴의 색상 테마입니다.","VS Code 확장의 게시자입니다.","VS Code 확장에 대한 활성화 이벤트입니다.","다른 확장에 대한 종속성입니다. 확장 식별자는 항상 ${publisher}.${name}입니다(예: vscode.csharp).","패키지가 VS Code 확장 형태로 게시되기 전에 스크립트가 실행되었습니다.","이 패키지에 표시된 VS Code 확장의 전체 기여입니다."],"vs/platform/extensions/node/extensionValidator":["`engines.vscode` 값 {0}을(를) 구문 분석할 수 없습니다. ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x 등을 사용하세요.","`engines.vscode`({0})에 지정된 버전이 명확하지 않습니다. vscode 버전이 1.0.0 이전이면 최소한 원하는 주 버전과 부 버전을 정의하세요( 예: ^0.10.0, 0.10.x, 0.11.0 등).","`engines.vscode`({0})에 지정된 버전이 명확하지 않습니다. vscode 버전이 1.0.0 이후이면 최소한 원하는 주 버전을 정의하세요(예: ^1.10.0, 1.10.x, 1.x.x, 2.x.x 등).","확장이 Code {0}과(와) 호환되지 않습니다. 확장에 {1}이(가) 필요합니다.","확장 버전이 semver와 호환되지 않습니다."],"vs/platform/jsonschemas/common/jsonContributionRegistry":["스키마를 사용하는 JSON 파일을 설명합니다. 자세한 내용은 json-schema.org를 참조하세요.","스키마에 대해 고유한 식별자입니다.","이 문서를 확인할 비교 대상 스키마 ","요소에 대한 설명이 포함된 제목입니다.","요소의 자세한 설명입니다. 가리킨 항목 메뉴 및 제안에 사용됩니다.","기본값입니다. 제안에서 사용됩니다.","현재 값을 정확하게 나누어야 하는 숫자(즉, 나머지 없음)입니다.","최대 숫자 값입니다. 기본적으로 포괄적입니다.","최대 속성을 배타적으로 설정합니다.","최소 숫자 값입니다. 기본적으로 포괄적입니다.","최소 속성을 배타적으로 설정합니다.","문자열의 최대 길이입니다.","문자열의 최소 길이입니다.","문자열과 일치하는 정규식입니다. 암시적으로 앵커가 지정되지 않습니다.","항목이 배열로 설정된 경우의 배열에만 사용됩니다. 해당 배열이 스키마인 경우 항목 배열에서 항목을 지정한 후 이 스키마에서 항목의 유효성을 검사합니다. false인 경우 추가 항목의 유효성 검사가 실패합니다.","배열에 사용됩니다. 모든 요소의 유효성을 검사할 스키마이거나 첫 번째 스키마에서 첫 번째 요소의 유효성을 검사하고 두 번째 스키마에서 두 번째 요소의 유효성을 검사하는 등의 순서로 각 항목의 유효성을 검사할 스키마 배열일 수 있습니다.","배열 내에 있을 수 있는 최대 항목 수입니다. 포괄적입니다.","배열 내에 있을 수 있는 최소 항목 수입니다. 포괄적입니다.","배열의 모든 항목이 고유해야 하는지의 여부입니다. 기본값은 false입니다.","개체가 가질 수 있는 최대 속성 수입니다. 포괄적입니다.","개체가 가질 수 있는 최소 속성 수입니다. 포괄적입니다.","이 개체에 필요한 모든 속성의 이름을 나열하는 문자열 배열입니다.","스키마 또는 부울 중 하나입니다. 스키마인 경우 'properties' 또는 'patternProperties'와 일치하지 않는 모든 속성의 유효성을 검사하는 데 사용됩니다. false인 경우 둘 중 하나와 일치하지 않는 모든 속성으로 인해 이 스키마가 실패합니다.","유효성 검사에 사용되지 않습니다. $ref가 포함된 인라인을 참조하려는 하위 스키마를 여기에 배치합니다.","각 속성의 스키마에 대한 속성 이름 맵입니다.","속성 일치를 위한 스키마에 대한 속성 이름의 정규식 맵입니다.","속성 이름 배열 또는 스키마에 대한 속성 이름 맵입니다. 속성 이름 배열은 키에 이름이 지정된 속성의 유효성이 개체에 있는 배열의 속성에 따라 결정된다는 것을 의미합니다. 값이 스키마인 경우 키의 속성이 개체에 존재해야 스키마가 개체에 적용됩니다.","유효한 리터럴 값 집합","기본 스키마 유형(숫자, 정수, Null, 배열, 개체, 부울, 문자열) 중 하나의 문자열 또는 해당 유형의 하위 집합을 지정하는 문자열 배열입니다.","값에 대해 필요한 형식을 설명합니다.","모든 스키마가 일치해야 하는 스키마 배열입니다.","최소한 하나의 스키마가 일치해야 하는 스키마 배열입니다.","스키마 배열로, 이러한 스키마 중 하나가 정확하게 일치해야 합니다.","일치하지 않아야 하는 스키마입니다."],"vs/platform/telemetry/common/telemetryService":["Telemetry","Enable usage data and errors to be sent to Microsoft."]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e6b4afa53e9c0f54edef1673de9001e9f0f547ae/vs\code\node\cliProcessMain.nls.ko.js.map
