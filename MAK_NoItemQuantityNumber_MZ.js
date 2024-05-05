//----------------------------------------------------------------------------------------------------
// No Item Quantity Number, a plugin by Makeratore
// This plugin eliminates the quantity number of items from the item window by default.
// File name must be: MAK_NoItemQuantityNumber_MZ
//----------------------------------------------------------------------------------------------------
// Made for RPG Maker MZ
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
* @target MZ
*
* @plugindesc This plugin eliminates the quantity number of items from the item window by default.
*
* @author Makeratore
* 
* @help File name must be: MAK_NoItemQuantityNumber_MZ
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
* - Hide item quantity
* Set this to true or false.
*
* @command Hide item quantity
* @text Hide item quantity
* @desc It hides the item quantity number
*
* @arg text
* @type string
* @default true
* @text Hide item quantity
* @desc Set this to true or false
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
Imported.MAK_NoItemQuantityNumber_MZ = true;

var MAK = MAK || {};
MAK.NoItemQuantityNumber_MZ = MAK.NoItemQuantityNumber_MZ || {};
MAK.NoItemQuantityNumber_MZ.version = 1.0;

(() => {

    const pluginName = "MAK_NoItemQuantityNumber_MZ";
    const parameters = PluginManager.parameters(pluginName);

    let hideItemNumber = String(parameters["StartHidingItemQuantity"]);
    
    PluginManager.registerCommand(pluginName, "Hide item quantity", args => {
        hideItemNumber = String(args.text);
    }); 

    Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
        if (this.needsNumber() && hideItemNumber === "false") {
            this.drawText(":", x, y, width - this.textWidth("00"), "right");
            this.drawText($gameParty.numItems(item), x, y, width, "right");
        }
    };

})();
 
//----------------------------------------------------------------------------------------------------
// End
//----------------------------------------------------------------------------------------------------