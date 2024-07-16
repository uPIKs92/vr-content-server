// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.26
// 

using Colyseus.Schema;
using Action = System.Action;

public partial class Action : Schema {
	[Type(0, "string")]
	public string action = default(string);

	[Type(1, "string")]
	public string status = default(string);

	[Type(2, "string")]
	public string username = default(string);

	[Type(3, "string")]
	public string error_level = default(string);

	[Type(4, "boolean")]
	public bool finished = default(bool);

	[Type(5, "string")]
	public string instructor = default(string);

	[Type(6, "boolean")]
	public bool highlight = default(bool);

	[Type(7, "string")]
	public string name = default(string);

	/*
	 * Support for individual property change callbacks below...
	 */

	protected event PropertyChangeHandler<string> __actionChange;
	public Action OnActionChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.action));
		__actionChange += __handler;
		if (__immediate && this.action != default(string)) { __handler(this.action, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(action));
			__actionChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __statusChange;
	public Action OnStatusChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.status));
		__statusChange += __handler;
		if (__immediate && this.status != default(string)) { __handler(this.status, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(status));
			__statusChange -= __handler;
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

	protected event PropertyChangeHandler<string> __error_levelChange;
	public Action OnError_levelChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.error_level));
		__error_levelChange += __handler;
		if (__immediate && this.error_level != default(string)) { __handler(this.error_level, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(error_level));
			__error_levelChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<bool> __finishedChange;
	public Action OnFinishedChange(PropertyChangeHandler<bool> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.finished));
		__finishedChange += __handler;
		if (__immediate && this.finished != default(bool)) { __handler(this.finished, default(bool)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(finished));
			__finishedChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __instructorChange;
	public Action OnInstructorChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.instructor));
		__instructorChange += __handler;
		if (__immediate && this.instructor != default(string)) { __handler(this.instructor, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(instructor));
			__instructorChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<bool> __highlightChange;
	public Action OnHighlightChange(PropertyChangeHandler<bool> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.highlight));
		__highlightChange += __handler;
		if (__immediate && this.highlight != default(bool)) { __handler(this.highlight, default(bool)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(highlight));
			__highlightChange -= __handler;
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

	protected override void TriggerFieldChange(DataChange change) {
		switch (change.Field) {
			case nameof(action): __actionChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(status): __statusChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(username): __usernameChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(error_level): __error_levelChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(finished): __finishedChange?.Invoke((bool) change.Value, (bool) change.PreviousValue); break;
			case nameof(instructor): __instructorChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(highlight): __highlightChange?.Invoke((bool) change.Value, (bool) change.PreviousValue); break;
			case nameof(name): __nameChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			default: break;
		}
	}
}

