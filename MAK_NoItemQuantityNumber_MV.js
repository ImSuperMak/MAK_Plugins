//----------------------------------------------------------------------------------------------------
// No Item Quantity Number, a plugin by Makeratore
// This plugin eliminates the quantity number of items from the item window by default.
// File name must be: MAK_NoItemQuantityNumber_MV
//----------------------------------------------------------------------------------------------------
// Made for RPG Maker MV
//----------------------------------------------------------------------------------------------------
// 05/05/2024 1.0 Release of plugin
//----------------------------------------------------------------------------------------------------
// TERMS AND CONDITIONS
// This plugin is released under the MIT license.
// You can use this plugin in commercial and non-commercial projects.
// Please, provide credits to Makeratore.
//
// This plugin can be found at:
// https://github.com/ImSuperMak/MAK_Plugins
//----------------------------------------------------------------------------------------------------
 
//----------------------------------------------------------------------------------------------------
/*:
*
* @plugindesc This plugin eliminates the quantity number of items from the item window by default.
*
* @author Makeratore
* 
* @help File name must be: MAK_NoItemQuantityNumber_MV
*
* TERMS AND CONDITIONS
* This plugin is released under the MIT license.
* You can use this plugin in commercial and non-commercial projects.
* Please, provide credits to Makeratore.
*
* This plugin can be found at:
* https://github.com/ImSuperMak/MAK_Plugins
*
* PLUGIN COMMANDS:
*
* - HideItemNumber false
* It shows the quantity number of items.
*
* - HideItemNumber true
* It hides the quantity number of items.
*
* @param StartHidingItemQuantity
* @text Start game hiding item quantity
* @desc Start game hiding item quantity? Set to true or false.
* @default true
* @type string
*
*/
//----------------------------------------------------------------------------------------------------
 
//----------------------------------------------------------------------------------------------------
// Start
//----------------------------------------------------------------------------------------------------

"use strict";

var Imported = Imported || {};
Imported.MAK_NoItemQuantityNumber_MV = true;

var MAK = MAK || {};
MAK.NoItemQuantityNumber_MV = MAK.NoItemQuantityNumber_MV || {};
MAK.NoItemQuantityNumber_MV.version = 1.0;

(function() {

    const pluginName = "MAK_NoItemQuantityNumber_MV";
    const parameters = PluginManager.parameters(pluginName);     

    var hideItemNumber = String(parameters["StartHidingItemQuantity"]);
    
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        
        if (command === "HideItemNumber") {
            hideItemNumber = String(args);
        }
        
    }
    
    Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
        if (this.needsNumber() && hideItemNumber === "false") {
            this.drawText(':', x, y, width - this.textWidth('00'), 'right');
            this.drawText($gameParty.numItems(item), x, y, width, 'right');
        }
    };
 
})();
 
//----------------------------------------------------------------------------------------------------
// End
//----------------------------------------------------------------------------------------------------