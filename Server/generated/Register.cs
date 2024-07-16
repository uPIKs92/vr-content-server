// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.26
// 

using Colyseus.Schema;
using Action = System.Action;

public partial class Register : Schema {
	[Type(0, "string")]
	public string id = default(string);

	[Type(1, "string")]
	public string id_user = default(string);

	[Type(2, "string")]
	public string name = default(string);

	[Type(3, "string")]
	public string username = default(string);

	[Type(4, "string")]
	public string password = default(string);

	[Type(5, "string")]
	public string id_exercise = default(string);

	[Type(6, "string")]
	public string id_unique = default(string);

	[Type(7, "string")]
	public string scenario = default(string);

	[Type(8, "string")]
	public string progress = default(string);

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

	protected event PropertyChangeHandler<string> __id_userChange;
	public Action OnId_userChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.id_user));
		__id_userChange += __handler;
		if (__immediate && this.id_user != default(string)) { __handler(this.id_user, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(id_user));
			__id_userChange -= __handler;
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

	protected event PropertyChangeHandler<string> __id_exerciseChange;
	public Action OnId_exerciseChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.id_exercise));
		__id_exerciseChange += __handler;
		if (__immediate && this.id_exercise != default(string)) { __handler(this.id_exercise, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(id_exercise));
			__id_exerciseChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __id_uniqueChange;
	public Action OnId_uniqueChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.id_unique));
		__id_uniqueChange += __handler;
		if (__immediate && this.id_unique != default(string)) { __handler(this.id_unique, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(id_unique));
			__id_uniqueChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __scenarioChange;
	public Action OnScenarioChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.scenario));
		__scenarioChange += __handler;
		if (__immediate && this.scenario != default(string)) { __handler(this.scenario, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(scenario));
			__scenarioChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __progressChange;
	public Action OnProgressChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.progress));
		__progressChange += __handler;
		if (__immediate && this.progress != default(string)) { __handler(this.progress, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(progress));
			__progressChange -= __handler;
		};
	}

	protected override void TriggerFieldChange(DataChange change) {
		switch (change.Field) {
			case nameof(id): __idChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(id_user): __id_userChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(name): __nameChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(username): __usernameChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(password): __passwordChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(id_exercise): __id_exerciseChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(id_unique): __id_uniqueChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(scenario): __scenarioChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(progress): __progressChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			default: break;
		}
	}
}

