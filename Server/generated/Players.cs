// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.26
// 

using Colyseus.Schema;
using Action = System.Action;

public partial class Players : Schema {
	[Type(0, "string")]
	public string id = default(string);

	[Type(1, "string")]
	public string nama = default(string);

	[Type(2, "string")]
	public string jenisUser = default(string);

	[Type(3, "number")]
	public float x = default(float);

	[Type(4, "number")]
	public float y = default(float);

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

	protected event PropertyChangeHandler<string> __namaChange;
	public Action OnNamaChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.nama));
		__namaChange += __handler;
		if (__immediate && this.nama != default(string)) { __handler(this.nama, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(nama));
			__namaChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<string> __jenisUserChange;
	public Action OnJenisUserChange(PropertyChangeHandler<string> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.jenisUser));
		__jenisUserChange += __handler;
		if (__immediate && this.jenisUser != default(string)) { __handler(this.jenisUser, default(string)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(jenisUser));
			__jenisUserChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<float> __xChange;
	public Action OnXChange(PropertyChangeHandler<float> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.x));
		__xChange += __handler;
		if (__immediate && this.x != default(float)) { __handler(this.x, default(float)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(x));
			__xChange -= __handler;
		};
	}

	protected event PropertyChangeHandler<float> __yChange;
	public Action OnYChange(PropertyChangeHandler<float> __handler, bool __immediate = true) {
		if (__callbacks == null) { __callbacks = new SchemaCallbacks(); }
		__callbacks.AddPropertyCallback(nameof(this.y));
		__yChange += __handler;
		if (__immediate && this.y != default(float)) { __handler(this.y, default(float)); }
		return () => {
			__callbacks.RemovePropertyCallback(nameof(y));
			__yChange -= __handler;
		};
	}

	protected override void TriggerFieldChange(DataChange change) {
		switch (change.Field) {
			case nameof(id): __idChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(nama): __namaChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(jenisUser): __jenisUserChange?.Invoke((string) change.Value, (string) change.PreviousValue); break;
			case nameof(x): __xChange?.Invoke((float) change.Value, (float) change.PreviousValue); break;
			case nameof(y): __yChange?.Invoke((float) change.Value, (float) change.PreviousValue); break;
			default: break;
		}
	}
}

