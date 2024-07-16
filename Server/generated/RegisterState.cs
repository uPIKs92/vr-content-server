// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.26
// 

using Colyseus.Schema;
using Action = System.Action;

public partial class RegisterState : Schema {
	[Type(0, "map", typeof(MapSchema<Register>))]
	public MapSchema<Register> register = new MapSchema<Register>();

	/*
	 * Support for individual property change callbacks below...
	 */

	protected event PropertyChangeHandler<MapSchema<Register>> __registerChange;
	public Action OnRegisterChange(PropertyChangeHandler<MapSchema<Register>> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.register));
		__registerChange += __handler;
		if (__immediate && this.register != null) { __handler(this.register, null); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(register));
			__registerChange -= __handler;
		};
	}

	protected override void TriggerFieldChange(DataChange change) {
		switch (change.Field) {
			case nameof(register): __registerChange?.Invoke((MapSchema<Register>) change.Value, (MapSchema<Register>) change.PreviousValue); break;
			default: break;
		}
	}
}

