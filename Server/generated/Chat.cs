// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.26
// 

using Colyseus.Schema;
using Action = System.Action;

public partial class Chat : Schema {
	[Type(0, "string")]
	public string sender = default(string);

	[Type(1, "string")]
	public string message = default(string);

	/*
	 * Support for individual property change callbacks below...
	 */

	protected event PropertyChangeHandler<string> __senderChange;
	public Action OnSenderChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.sender));
		__senderChange += __handler;
		if (__immediate && this.sender != default(string)) { __handler(this.sender, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(sender));
			__senderChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __messageChange;
	public Action OnMessageChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.message));
		__messageChange += __handler;
		if (__immediate && this.message != default(string)) { __handler(this.message, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(message));
			__messageChange -= __handler;
		};
	}

	protected override void TriggerFieldChange(DataChange change) {
		switch (change.Field) {
			case nameof(sender): __senderChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(message): __messageChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			default: break;
		}
	}
}

