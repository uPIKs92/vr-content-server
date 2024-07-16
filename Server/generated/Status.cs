// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.26
// 

using Colyseus.Schema;
using Action = System.Action;

public partial class Status : Schema {
	[Type(0, "string")]
	public string recipient = default(string);

	[Type(1, "boolean")]
	public bool enable = default(bool);

	[Type(2, "boolean")]
	public bool disable = default(bool);

	/*
	 * Support for individual property change callbacks below...
	 */

	protected event PropertyChangeHandler<string> __recipientChange;
	public Action OnRecipientChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.recipient));
		__recipientChange += __handler;
		if (__immediate && this.recipient != default(string)) { __handler(this.recipient, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(recipient));
			__recipientChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<bool> __enableChange;
	public Action OnEnableChange(PropertyChangeHandler<bool> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.enable));
		__enableChange += __handler;
		if (__immediate && this.enable != default(bool)) { __handler(this.enable, default(bool)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(enable));
			__enableChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<bool> __disableChange;
	public Action OnDisableChange(PropertyChangeHandler<bool> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.disable));
		__disableChange += __handler;
		if (__immediate && this.disable != default(bool)) { __handler(this.disable, default(bool)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(disable));
			__disableChange -= __handler;
		};
	}

	protected override void TriggerFieldChange(DataChange change) {
		switch (change.Field) {
			case nameof(recipient): __recipientChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(enable): __enableChange?.Invoke((bool) change.Value, (bool) change.PreviousValue); break;
			case nameof(disable): __disableChange?.Invoke((bool) change.Value, (bool) change.PreviousValue); break;
			default: break;
		}
	}
}

