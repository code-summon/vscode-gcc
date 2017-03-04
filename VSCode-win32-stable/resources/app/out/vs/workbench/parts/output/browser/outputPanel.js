/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var t=["vs/platform/event/common/event","vs/workbench/parts/output/browser/outputPanel","exports","vs/nls!vs/workbench/parts/output/browser/outputPanel","vs/base/common/lifecycle","vs/editor/common/services/modeService","vs/platform/telemetry/common/telemetry","vs/platform/storage/common/storage","vs/platform/configuration/common/configuration","require","vs/platform/instantiation/common/instantiation","vs/platform/message/common/message","vs/workbench/browser/parts/editor/stringEditor","vs/workbench/parts/output/common/output","vs/workbench/parts/output/common/outputEditorInput","vs/workbench/parts/output/browser/outputActions","vs/workbench/services/workspace/common/contextService","vs/workbench/services/editor/common/editorService","vs/workbench/services/themes/common/themeService"],e=function(e){for(var o=[],n=0,i=e.length;n<i;n++)o[n]=t[e[n]];return o},o=this&&this.__extends||function(t,e){function o(){this.constructor=t}for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)},n=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(s=(r<3?i(s):r>3?i(e,o,s):i(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s},i=this&&this.__param||function(t,e){return function(o,n){e(o,n,t)}};define(t[1],e([9,2,3,4,5,6,7,8,0,10,11,12,13,14,15,16,17,18]),function(t,e,r,s,c,a,p,u,l,v,h,m,f,d,g,y,I,S){"use strict";var b=function(t){function e(e,o,n,i,r,s,c,a,p,u,l){t.call(this,e,o,n,i,r,s,c,a,p,u),this.outputService=l,this.toDispose=[]}return o(e,t),e.prototype.getId=function(){return f.OUTPUT_PANEL_ID},e.prototype.getActions=function(){var t=this;return this.actions||(this.actions=[this.instantiationService.createInstance(g.SwitchOutputAction),this.instantiationService.createInstance(g.ClearOutputAction)],this.actions.forEach(function(e){t.toDispose.push(e)})),this.actions},e.prototype.getActionItem=function(e){return e.id===g.SwitchOutputAction.ID?this.instantiationService.createInstance(g.SwitchOutputActionItem,e):t.prototype.getActionItem.call(this,e)},e.prototype.getCodeEditorOptions=function(){var e=t.prototype.getCodeEditorOptions.call(this);e.wrappingColumn=0,e.lineNumbers=!1,e.glyphMargin=!1,e.lineDecorationsWidth=20,e.rulers=[],e.folding=!1,e.scrollBeyondLastLine=!1;var o=this.outputService.getActiveChannel();return e.ariaLabel=o?r.localize(0,null,o.label):r.localize(1,null),e},e.prototype.setInput=function(e,o){var n=this;return t.prototype.setInput.call(this,e,o).then(function(){return n.revealLastLine()})},e.prototype.createEditor=function(e){t.prototype.createEditor.call(this,e),this.setInput(d.OutputEditorInput.getInstance(this.instantiationService,this.outputService.getActiveChannel()),null)},e.prototype.focus=function(){t.prototype.focus.call(this),this.revealLastLine()},e.prototype.dispose=function(){this.toDispose=s.dispose(this.toDispose),t.prototype.dispose.call(this)},e=n([i(0,a.ITelemetryService),i(1,v.IInstantiationService),i(2,y.IWorkspaceContextService),i(3,p.IStorageService),i(4,h.IMessageService),i(5,u.IConfigurationService),i(6,l.IEventService),i(7,I.IWorkbenchEditorService),i(8,c.IModeService),i(9,S.IThemeService),i(10,f.IOutputService)],e)}(m.StringEditor);e.OutputPanel=b})}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/e6b4afa53e9c0f54edef1673de9001e9f0f547ae/vs\workbench\parts\output\browser\outputPanel.js.map
