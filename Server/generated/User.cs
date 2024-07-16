// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.26
// 

using Colyseus.Schema;
using Action = System.Action;

public partial class User : Schema {
	[Type(0, "string")]
	public string id = default(string);

	[Type(1, "string")]
	public string username = default(string);

	[Type(2, "string")]
	public string password = default(string);

	[Type(3, "string")]
	public string name = default(string);

	[Type(4, "int32")]
	public int id_user = default(int);

	/*
	 * Support for individual property change callbacks below...
	 */

	protected event PropertyChangeHandler<string> __idChange;
	public Action OnIdChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.id));
		__idChange += __handler;
		if (__immediate && this.id != default(string)) { __handler(this.id, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(id));
			__idChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __usernameChange;
	public Action OnUsernameChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.username));
		__usernameChange += __handler;
		if (__immediate && this.username != default(string)) { __handler(this.username, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(username));
			__usernameChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __passwordChange;
	public Action OnPasswordChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.password));
		__passwordChange += __handler;
		if (__immediate && this.password != default(string)) { __handler(this.password, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(password));
			__passwordChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __nameChange;
	public Action OnNameChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.name));
		__nameChange += __handler;
		if (__immediate && this.name != default(string)) { __handler(this.name, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(name));
			__nameChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<int> __id_userChange;
	public Action OnId_userChange(PropertyChangeHandler<int> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.id_user));
		__id_userChange += __handler;
		if (__immediate && this.id_user != default(int)) { __handler(this.id_user, default(int)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(id_user));
			__id_userChange -= __handler;
		};
	}

	protected override void TriggerFieldChange(DataChange change) {
		switch (change.Field) {
			case nameof(id): __idChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(username): __usernameChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(password): __passwordChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(name): __nameChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(id_user): __id_userChange?.Invoke((int) change.Value, (int) change.PreviousValue); break;
			default: break;
		}
	}
}

