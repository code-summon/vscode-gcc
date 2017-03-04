/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/base/common/worker/workerServer.nls.it",{"vs/base/common/errors":["{0}. Codice errore: {1}","Autorizzazione negata (HTTP {0})","Autorizzazione negata","{0} (HTTP {1}: {2})","{0} (HTTP {1})","Errore di connessione sconosciuto ({0})","Si è verificato un errore di connessione sconosciuto. La connessione a Internet è stata interrotta oppure il server al quale si è connessi è offline.","{0}: {1}","Si è verificato un errore sconosciuto. Per altri dettagli, vedere il log.","Si è verificato un errore di sistema ({0})","Si è verificato un errore sconosciuto. Per altri dettagli, vedere il log.","{0} ({1} errori in totale)","Si è verificato un errore sconosciuto. Per altri dettagli, vedere il log.","Non implementato","Argomento non valido: {0}","Argomento non valido","Stato non valido: {0}","Stato non valido","Non è stato possibile caricare un file obbligatorio. Non si è più connessi a Internet oppure il server a cui si è connessi è offline. Per riprovare, aggiornare il browser.","Non è stato possibile caricare un file obbligatorio. Riavviare l'applicazione e riprovare. Dettagli: {0}"],"vs/base/common/severity":["Errore","Avviso","Informazioni"],"vs/editor/common/config/defaultConfig":["Contenuto editor"],"vs/editor/common/model/textModelWithTokens":["Si è verificato un errore della modalità durante la suddivisione in token dell'input."],"vs/editor/common/modes/modesRegistry":["Testo normale"],"vs/editor/common/modes/supports/suggestSupport":["Enable word based suggestions."],"vs/editor/common/services/modeServiceImpl":["Dichiarazioni del linguaggio per contributes.","ID del linguaggio.","Alias di nome per il linguaggio.","Estensioni di file associate al linguaggio.","Nomi file associati al linguaggio.","Criteri GLOB dei nomi file associati al linguaggio.","Tipi MIME associati al linguaggio.","Espressione regolare corrispondente alla prima riga di un file del linguaggio.","Percorso relativo di un file che contiene le opzioni di configurazione per il linguaggio.","Il valore di `contributes.{0}` è vuoto","la proprietà `{0}` è obbligatoria e deve essere di tipo `string`","la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`","la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`","la proprietà `{0}` può essere omessa e deve essere di tipo `string`","la proprietà `{0}` può essere omessa e deve essere di tipo `string`","la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`","la proprietà `{0}` può essere omessa e deve essere di tipo `string[]`","Il valore di `contributes.{0}` non è valido. È prevista una matrice."],"vs/platform/configuration/common/configurationRegistry":["Impostazioni di configurazione di contributes.","Riepilogo delle impostazioni. Questa etichetta verrà usata nel file di impostazioni come commento di separazione.","Descrizione delle proprietà di configurazione.","se impostato, 'configuration.type' deve essere impostato su 'object","'configuration.title' deve essere una stringa","'configuration.properties' deve essere un oggetto"],"vs/platform/extensions/common/abstractExtensionService":["L'attivazione dell'estensione `{1}` non è riuscita. Motivo: la dipendenza `{0}` è sconosciuta.","L'attivazione dell'estensione `{1}` non è riuscita. Motivo: non è stato possibile attivare la dipendenza `{0}`.","L'attivazione dell'estensione `{0}` non è riuscita. Motivo: sono presenti più di 10 livelli di dipendenze (molto probabilmente un ciclo di dipendenze).","L'attivazione dell'estensione `{0}` non è riuscita: {1}."],"vs/platform/extensions/common/extensionsRegistry":["La descrizione dell'estensione restituita è vuota","la proprietà `{0}` è obbligatoria e deve essere di tipo `string`","la proprietà `{0}` è obbligatoria e deve essere di tipo `string`","la proprietà `{0}` è obbligatoria e deve essere di tipo `string`","la proprietà `{0}` è obbligatoria e deve essere di tipo `object`","la proprietà `{0}` è obbligatoria e deve essere di tipo `string`","la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`","la proprietà `{0}` può essere omessa o deve essere di tipo `string[]`","le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi","la proprietà `{0}` può essere omessa o deve essere di tipo `string`","Valore previsto di `main` ({0}) da includere nella cartella dell'estensione ({1}). L'estensione potrebbe non essere più portatile.","le proprietà `{0}` e `{1}` devono essere specificate o omesse entrambi","Nome visualizzato per l'estensione usato nella raccolta di Visual Studio Code.","Categorie usate dalla raccolta di Visual Studio Code per definire la categoria dell'estensione.","Banner usato nel marketplace di Visual Studio Code.","Colore del banner nell'intestazione pagina del marketplace di Visual Studio Code.","Tema colori per il tipo di carattere usato nel banner.","Editore dell'estensione Visual Studio Code.","Eventi di attivazione per l'estensione Visual Studio Code.","Dipendenze ad altre estensioni. L'ID di un'estensione è sempre ${publisher}.${name}. Ad esempio: vscode.csharp.","Script eseguito prima che il pacchetto venga pubblicato come estensione Visual Studio Code.","Tutti i contributi dell'estensione Visual Studio Code rappresentati da questo pacchetto."],"vs/platform/jsonschemas/common/jsonContributionRegistry":["Descrive un file JSON che usa uno schema. Per altre informazioni, visitare il sito json-schema.org.","Identificatore univoco per lo schema.","Schema da usare per la verifica di questo documento ","Titolo descrittivo dell'elemento","Descrizione lunga dell'elemento. Usata nei menu visualizzati al passaggio del mouse e nei suggerimenti.","Valore predefinito. Usato dai suggerimenti.","Numero per il quale deve essere diviso perfettamente il valore corrente (ossia senza resto)","Valore numerico massimo, inclusivo per impostazione predefinita.","Rende esclusiva la proprietà maximum.","Valore numerico minimo, inclusivo per impostazione predefinita.","Rende esclusiva la proprietà minimum.","Lunghezza massima di una stringa.","Lunghezza minima di una stringa.","Espressione regolare alla quale far corrispondere la stringa. Non è implicitamente ancorata.","Per le matrici solo quando gli elementi sono impostati come una matrice. Se è uno schema, convalida gli elementi dopo quelli specificati dalla matrice di elementi. Se è false, gli elementi aggiuntivi impediranno la convalida.","Per le matrici. Può essere uno schema in base al quale convalidare tutti gli elementi oppure una matrice di schemi in base alla quale convalidare ogni elemento nell'ordine appropriato. Il primo schema convalida il primo elemento, il secondo schema convalida il secondo elemento e così via.","Numero massimo di elementi che possono essere presenti in una matrice. Inclusivo.","Numero minimo di elementi che possono essere presenti in una matrice. Inclusivo.","Indica se tutti gli elementi nella matrice devono essere univoci. Il valore predefinito è false.","Numero massimo di proprietà che un oggetto può avere. Inclusivo.","Numero minimo di proprietà che un oggetto può avere. Inclusivo.","Matrice di stringhe che elenca i nomi di tutte le proprietà richieste per questo oggetto.","Schema o valore booleano. Se è uno schema, viene usato per convalidare tutte le proprietà che non corrispondono a 'properties' o 'patternProperties'. Se è false, eventuali proprietà non corrispondenti a nessuna delle due bloccheranno lo schema.","Non usato per la convalida. Inserire qui i sottoschemi ai quali fare riferimento inline con $ref","Mapping di nomi di proprietà a schemi per ogni proprietà.","Mapping di espressioni regolari su nomi di proprietà a schemi per le proprietà corrispondenti.","Mapping di nomi di proprietà a una matrice di nomi di proprietà o a uno schema. Una matrice di nomi di proprietà indica che, per essere valida, la proprietà denominata nella chiave dipende dalle proprietà nella matrice presente nell'oggetto. Se il valore è uno schema, lo schema viene applicato solo all'oggetto se la proprietà nella chiave esiste nell'oggetto.","Set di valori letterali validi","Stringa di uno dei tipi di schema di base (numero, intero, Null, matrice, oggetto, booleano, stringa) o matrice di stringhe che specifica un subset di questi tipi.","Descrive il formato previsto per il valore.","Matrice di schemi che devono tutti avere una corrispondenza.","Matrice di schemi, in cui almeno uno deve avere una corrispondenza.","Matrice di schemi, uno dei quali deve avere una corrispondenza.","Schema che non deve avere corrispondenze."]});
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e6b4afa53e9c0f54edef1673de9001e9f0f547ae/vs\base\common\worker\workerServer.nls.it.js.map
