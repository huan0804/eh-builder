// Nạp trước mọi ảnh nền cảnh có thật trong src/assets/backgrounds/ — dùng chung bởi
// TitleScreen, Prologue, Chapter1 (mọi nơi có `background` trong data, luôn kèm đuôi file
// vd 'clb-ong-kinh-room.jpg'). Cùng pattern với CharacterPortrait.jsx: biết ảnh tồn tại hay
// chưa qua import.meta.glob, không cần thử tải rồi bắt lỗi 404 (tránh nhấp nháy layout).
const backgroundModules = import.meta.glob('../assets/backgrounds/*.{jpg,jpeg,png,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function resolveBackgroundUrl(filename) {
  if (!filename) return null;
  return backgroundModules[`../assets/backgrounds/${filename}`] ?? null;
}
